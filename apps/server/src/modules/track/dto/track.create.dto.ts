import { BaseCreateDto } from '@backend/common';
import { TrackEntity } from '../entities/track.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class TrackCreateDto extends BaseCreateDto<TrackEntity> {
  @ApiProperty()
  @IsString()
  name: string;
  
  @ApiProperty()
  @IsString()
  artist: string;
}
