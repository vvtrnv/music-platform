import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import { FileTypes } from './interfaces';

@Injectable()
export class FilesService {
  private readonly logger = new Logger(FilesService.name);

  public save(file: any, fileType?: FileTypes) {
    try {
      const fileType = (file.originalname as string).split('.').pop();
      const filepath = path.resolve(__dirname, 'test/uploaded');
      const filename = `${crypto.randomUUID()}.${fileType}`;

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
