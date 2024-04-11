import { BaseUpdateDto } from '@backend/common';
import { Track } from '../entities/track.entity';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class TrackUpdateDto extends BaseUpdateDto<Track> {
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  name?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  artist?: string;

  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  listens?: number;
}