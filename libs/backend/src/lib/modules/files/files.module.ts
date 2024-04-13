import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { FileEntity } from './entities/file.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { S3MinioModule } from '../s3-minio';

@Module({
  providers: [FilesService],
  exports: [FilesService],
  imports: [
    TypeOrmModule.forFeature([FileEntity]),
    S3MinioModule,
  ],
})
export class FilesModule {}
