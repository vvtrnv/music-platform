import { UUID } from 'crypto';
import { BaseSearchDto } from '../../classes/dto/base.search.dto';
import { BaseCreateDto } from '../../classes/dto/base.create.dto';
import { BaseUpdateDto } from '../../classes/dto/base.update.dto';

export interface IBaseService<Entity = any> {
  findAll(dto?: BaseSearchDto): Promise<Entity[]>;
  findById(id: UUID): Promise<Entity> | Promise<null>;
  create(dto: BaseCreateDto): Promise<Entity>;
  update(id: string, dto: BaseUpdateDto): Promise<void>;
}
