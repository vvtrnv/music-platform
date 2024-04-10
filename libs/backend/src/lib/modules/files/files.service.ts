import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import { FileTypes } from './interfaces';
import * as uuid from 'uuid';

@Injectable()
export class FilesService {
  private readonly logger = new Logger(FilesService.name);

  public save(file: any, fileType?: FileTypes) {
    try {
      console.log(file);
      const fileType = file.originalname.split('.').pop();
      const filepath = path.resolve(__dirname, 'test/uploaded');
      const filename = `${uuid.v4()}.${fileType}`;

      if (!fs.existsSync(filepath)) {
        this.logger.log(`Создан каталог '${filepath}'`);
        fs.mkdirSync(filepath, { recursive: true });
      }
      this.logger.log(`Сохранение файла ${filename}`);
      fs.writeFileSync(path.resolve(filepath, filename), file.buffer);
    } catch (error: any) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
  // public remove() {}
}
