import { Injectable } from '@nestjs/common';
import { BaseCreateDto, BaseSearchDto, BaseUpdateDto, IBaseService } from '@backend/common';
import { UUID } from 'crypto';
import { Track } from './entities/track.entity';

@Injectable()
export class TrackService implements IBaseService<Track> {
  findAll(dto?: BaseSearchDto<any>): Track[] {
    throw new Error('Method not implemented.');
  }
  findById(id: UUID): Track {
    throw new Error('Method not implemented.');
  }
  create(dto: BaseCreateDto<any>): Track {
    throw new Error('Method not implemented.');
  }
  update(dto: BaseUpdateDto<any>): void {
    throw new Error('Method not implemented.');
  }
}
