import { BaseSearchDto } from '../../classes/dto/base.search.dto';
import { BaseCreateDto } from '../../classes/dto/base.create.dto';
import { UpdateResult } from 'typeorm';

export interface IBaseService<Entity = any> {
  findAll(dto?: BaseSearchDto): Promise<Entity[]>;
  findById(id: string): Promise<Entity>;
  create(dto: BaseCreateDto): Promise<Entity>;
  update(id: string, dto: Partial<BaseCreateDto>): Promise<UpdateResult>;
}
