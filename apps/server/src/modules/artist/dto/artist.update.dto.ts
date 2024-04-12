import { BaseUpdateDto } from '@backend/common';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { ArtistEntity } from '../entities/artist.entity';

export class ArtistUpdateDto extends BaseUpdateDto<ArtistEntity> {
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  name?: string;
}
