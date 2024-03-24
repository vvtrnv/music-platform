import { UUID } from 'crypto';
import { BaseSearchDto } from '../../classes/dto/base.search.dto';
import { BaseCreateDto } from '../../classes/dto/base.create.dto';
import { BaseUpdateDto } from '../../classes/dto/base.update.dto';

export interface IBaseService<Entity = any> {
  findAll(dto?: BaseSearchDto): Entity[];
  findById(id: UUID): Entity | null;
  create(dto: BaseCreateDto): Entity;
  update(dto: BaseUpdateDto): void;
}
