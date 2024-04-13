import { Module } from '@nestjs/common';
import { S3MinioService } from './s3-minio.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  providers: [S3MinioService],
  exports: [S3MinioService],
  imports: [
    ConfigModule,
  ],
})
export class S3MinioModule {}
