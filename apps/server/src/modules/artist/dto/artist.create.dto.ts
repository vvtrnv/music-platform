import { BaseCreateDto } from '@backend/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { ArtistEntity } from '../entities/artist.entity';

export class ArtistCreateDto extends BaseCreateDto<ArtistEntity> {
  @ApiProperty()
  @IsString()
  name: string;
}
