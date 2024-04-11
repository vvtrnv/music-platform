import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { FileEntity } from './entities/file.entity';

@Module({
  providers: [FilesService],
  exports: [FilesService],
  imports: [
    SequelizeModule.forFeature([FileEntity])
  ],
})
export class FilesModule {}
