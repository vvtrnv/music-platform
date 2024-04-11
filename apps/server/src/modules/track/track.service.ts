import { Injectable, Logger } from '@nestjs/common';
import { IBaseService } from '@backend/common';
import { TrackEntity } from './entities/track.entity';
import { TrackSearchDto } from './dto/track.search.dto';
import { TrackCreateDto } from './dto/track.create.dto';
import { TrackUpdateDto } from './dto/track.update.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
@Injectable()
export class TrackService implements IBaseService<TrackEntity> {
  private readonly logger = new Logger(TrackService.name);
  constructor(
    @InjectRepository(TrackEntity)
    private filesRepo: Repository<TrackEntity>,
  ) {}

  public async findAll(dto?: TrackSearchDto): Promise<TrackEntity[]> {
    return this.filesRepo.find({ where: { ...dto } });
  }
  public async findById(id: string): Promise<TrackEntity> {
    return this.filesRepo.findOne({ where: { id } });
  }
  public async create(dto: TrackCreateDto): Promise<TrackEntity> {
    return this.filesRepo.save({ ...dto });
  }
  public async update(id: string, dto: TrackUpdateDto): Promise<UpdateResult> {
    return this.filesRepo.update({ id }, { ...dto });
  }
  
}
