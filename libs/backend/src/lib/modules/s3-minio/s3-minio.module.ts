import { Module } from '@nestjs/common';
import { S3MinioService } from './s3-minio.service';

@Module({
  providers: [S3MinioService],
  exports: [S3MinioService],
  imports: [],
})
export class S3MinioModule {}
