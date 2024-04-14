import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IS3MinioConfig, S3GetParams, S3UploadParams } from './interfaces';
import { Client } from 'minio';
import internal from 'stream';

@Injectable()
export class S3MinioService {
  protected readonly logger = new Logger(S3MinioService.name);
  protected minioClient: Client;

  constructor(
    protected readonly configService: ConfigService,
  ) {
    const minioConfig = this.configService.get<IS3MinioConfig>('minio');
    if (!minioConfig?.accessKeyId) {
      this.logger.error(`S3 AccessKey not found. Config: ${JSON.stringify(configService)}`);
      throw new Error('S3 access key not found. Minio not configurated');
    }
    this.minioClient = new Client({
      endPoint: minioConfig.endpoint,
      port: minioConfig.port,
      accessKey: minioConfig.accessKeyId,
      secretKey: minioConfig.secretAccessKey,
      useSSL: false,
    });
  }

  public async upload(params: S3UploadParams) {
    const { bucket, key, body } = params;
    const bucketExists = await this.minioClient.bucketExists(bucket);
    if (!bucketExists) {
      this.logger.log(`Upload. Bucket '${bucket}' will be created`);
      await this.minioClient.makeBucket(bucket);
    }
    await this.minioClient.putObject(bucket, key, body, body.length, (err: Error) => {
      if (err) {
        this.logger.error(`Upload. File ${key} in bucket '${bucket}' not uploaded. ${err}`);
        throw new Error('Error upload file');
      }
      this.logger.log(`Upload. File ${key} in bucket '${bucket}' uploaded. ${err}`);
    });
  }

  public async getStream(params: S3GetParams): Promise<internal.Readable> {
    const { bucket, key } = params;
    return this.minioClient.getObject(bucket, key);
  }
}
