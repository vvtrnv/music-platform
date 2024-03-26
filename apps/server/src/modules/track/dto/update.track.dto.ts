import { BaseUpdateDto } from '@backend/common';
import { Track } from '../entities/track.entity';
import { IsString } from 'class-validator';

export class UpdateTrackDto extends BaseUpdateDto<Track> {
  @IsString()
  name: string;
  @IsString()
  artist: string;
  @IsString()
  picture?: string;
  @IsString()
  audio?: string;
}
