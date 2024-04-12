import { IBaseService } from '@backend/common';
import { Injectable } from '@nestjs/common';
import { ArtistEntity } from './entities/artist.entity';
import { Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ArtistSearchDto } from './dto/artist.search.dto';
import { ArtistCreateDto } from './dto/artist.create.dto';
import { ArtistUpdateDto } from './dto/artist.update.dto';

@Injectable()
export class ArtistService implements IBaseService<ArtistEntity> {
  constructor(
    @InjectRepository(ArtistEntity)
    protected artistsRepo: Repository<ArtistEntity>,
  ) {}

  public async findAll(dto?: ArtistSearchDto): Promise<ArtistEntity[]> {
    return this.artistsRepo.find({ where: { ...dto } })
  }
  public async findById(id: string): Promise<ArtistEntity> {
    return this.artistsRepo.findOne({ where: { id } })
  }
  public async create(dto: ArtistCreateDto): Promise<ArtistEntity> {
    return this.artistsRepo.save(dto);
  }
  public async update(id: string, dto: ArtistUpdateDto): Promise<UpdateResult> {
    return this.artistsRepo.update({ id }, dto);
  }
}
