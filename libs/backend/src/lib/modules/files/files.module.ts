import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { FileEntity } from './entities/file.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [FilesService],
  exports: [FilesService],
  imports: [
    TypeOrmModule.forFeature([FileEntity])
  ],
})
export class FilesModule {}
