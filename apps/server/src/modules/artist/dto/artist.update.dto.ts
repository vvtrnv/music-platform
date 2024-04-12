
import { PartialType } from '@nestjs/mapped-types';
import { ArtistCreateDto } from './artist.create.dto';

export class ArtistUpdateDto extends PartialType(ArtistCreateDto) {}
