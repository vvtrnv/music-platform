import { BaseCreateDto } from '@backend/common';
import { Track } from '../entities/track.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class TrackCreateDto extends BaseCreateDto<Track> {
  @ApiProperty()
  @IsString()
  name: string;
  
  @ApiProperty()
  @IsString()
  artist: string;
}
