import { BaseSearchDto } from '@backend/common';
import { Track } from '../entities/track.entity';
import { IsOptional, IsString } from 'class-validator';

export class SearchTrackDto extends BaseSearchDto<Track> {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  artist?: string;

  @IsString()
  @IsOptional()
  listens?: string;
}
