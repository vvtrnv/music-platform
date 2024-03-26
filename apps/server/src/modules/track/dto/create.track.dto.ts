import { BaseCreateDto } from '@backend/common';
import { IsString } from 'class-validator';
import { Track } from '../entities/track.entity';

export class CreateTrackDto extends BaseCreateDto<Track> {
  @IsString()
  name: string;
  @IsString()
  artist: string;
  @IsString()
  picture?: string;
  @IsString()
  audio?: string;
}
