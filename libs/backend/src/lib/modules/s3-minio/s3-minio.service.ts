import { PutObjectCommand, PutObjectCommandOutput, S3Client } from '@aws-sdk/client-s3';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IS3MinioConfig, UploadParams } from './interfaces';

@Injectable()
export class S3MinioService {
  protected readonly logger = new Logger(S3MinioService.name);
  protected client: S3Client;

  constructor(
    protected readonly configService: ConfigService,
  ) {
    const minioConfig = this.configService.get<IS3MinioConfig>('minio');
    if (!minioConfig?.accessKeyId) {
      this.logger.error(`S3 AccessKeyId not found. Config: ${JSON.stringify(configService)}`);
      throw new Error('S3 access key ID not found. Minio not configurated');
    }

    this.client = new S3Client({
      endpoint: minioConfig.endpoint,
      credentials: {
        accessKeyId: minioConfig.accessKeyId,
        secretAccessKey: minioConfig.secretAccessKey,
      },
      region: minioConfig.region,
      forcePathStyle: true,
    });
  }

  public async upload(params: UploadParams): Promise<PutObjectCommandOutput> {
    return this.client.send(new PutObjectCommand(params));
  }

}
