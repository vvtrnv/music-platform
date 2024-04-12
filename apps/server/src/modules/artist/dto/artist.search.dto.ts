import { BaseSearchDto } from '@backend/common';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { ArtistEntity } from '../entities/artist.entity';

export class ArtistSearchDto extends BaseSearchDto<ArtistEntity> {
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  name?: string;
}
