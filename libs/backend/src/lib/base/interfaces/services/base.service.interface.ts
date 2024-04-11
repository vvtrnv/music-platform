import { UUID } from 'crypto';
import { BaseSearchDto } from '../../classes/dto/base.search.dto';
import { BaseCreateDto } from '../../classes/dto/base.create.dto';
import { BaseUpdateDto } from '../../classes/dto/base.update.dto';
import { UpdateResult } from 'typeorm';

export interface IBaseService<Entity = any> {
  findAll(dto?: BaseSearchDto): Promise<Entity[]>;
  findById(id: UUID): Promise<Entity>;
  create(dto: BaseCreateDto): Promise<Entity>;
  update(id: string, dto: BaseUpdateDto): Promise<UpdateResult>;
}
