import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { FileEntity } from './entities/file.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { S3MinioModule } from '../s3-minio';
import { FilesController } from './files.controller';

@Module({
  providers: [FilesService],
  exports: [FilesService],
  imports: [
    TypeOrmModule.forFeature([FileEntity]),
    S3MinioModule,
  ],
  controllers: [FilesController],
})
export class FilesModule {}
