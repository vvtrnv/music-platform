import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import { FileTypes, IFile } from './interfaces';
import * as uuid from 'uuid';
import { FileEntity } from './entities/file.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { S3MinioService } from '../s3-minio';

@Injectable()
export class FilesService {
  private readonly logger = new Logger(FilesService.name);
  constructor(
    @InjectRepository(FileEntity)
    private filesRepo: Repository<FileEntity>,
    private s3minioService: S3MinioService,
  ) {}

  /**
   * Сохраняем файл
   * @param file 
   * @param fileType 
   * @returns 
   */
  public async save(file: any, fileType: FileTypes): Promise<string | undefined> {
    const fileId = uuid.v4();
    const fileExtension = file.originalname.split('.').pop();
    const filename = `${fileId}.${fileExtension}`;

    await this.s3minioService.upload({
      key: fileId,
      bucket: fileType,
      body: file.buffer,
    });
    return (await this.createRecord({ filename, path: '' })).id;
  }

  /**
   * Удаление файла/файлов
   * @param whereOpt 
   * @returns количество задетых записей
   */
  protected async remove(whereOpt: IFile): Promise<DeleteResult> {
    try {
      const fileRecords = await this.getFileRecords(whereOpt);
      let deletedFilesCounter = 0;

      this.logger.log(`remove. Найдено ${fileRecords.length} записей по запросу ${whereOpt}`)
      fileRecords.forEach(async file => await fs.unlink(path.resolve(file?.path ?? '', file?.filename ?? ''), err => {
        if (err && err.code == 'ENOENT') {
          this.logger.error(`Файл ${file.path}/${file.filename} не найден`);
        } else if (err) {
          this.logger.error(`При удалении файла ${file.path}/${file.filename} ошибка ${err.message}`);
        } else {
          this.logger.log(`Файл ${file.path}/${file.filename} успешно удалён`);
          deletedFilesCounter += 1;
        }
      }));
      this.logger.log(`remove. Удалено ${deletedFilesCounter} файлов из ${fileRecords.length} найденых записей`)
      return this.removeRecords(whereOpt);
    } catch (error: any) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }


  /**
   * Создание записи о файле
   * @param file - данные для записи
   * @returns FileEntity
   */
  protected async createRecord(file: IFile): Promise<FileEntity> {
    return this.filesRepo.save({ ...file });
  }
  /**
   * Удаление записи о файле/файлах
   * @param file поля для поиска
   * @returns количество затронутых записей
   */
  protected async removeRecords(file: IFile): Promise<DeleteResult> {
    return this.filesRepo.delete({ ...file });
  }
  /**
   * Получение записей из таблицы Files
   * @param file поля для поиска
   * @returns Массив
   */
  protected async getFileRecords(file: IFile): Promise<FileEntity[]>{
    return this.filesRepo.find({ where: { ...file } })
  }
}
