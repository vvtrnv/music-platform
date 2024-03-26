import { Injectable } from '@nestjs/common';
import { IBaseService } from '@backend/common';
import { Repository } from 'sequelize-typescript';
import { Track } from './entities/track.entity';
import { SearchTrackDto } from './dto/search.track.dto';
import { CreateTrackDto } from './dto/create.track.dto';
import { UpdateTrackDto } from './dto/update.track.dto';

@Injectable()
export class TrackService implements IBaseService<Track> {
  constructor(
    protected trackRepo: Repository<Track>,
  ) {}

  public async findAll(dto?: SearchTrackDto): Promise<Track[]> {
    return this.trackRepo.findAll({
      where: {
        ...dto,
      },
    });
  }

  public async findById(id: string): Promise<Track> {
    return this.trackRepo.findOne({ where: { id } })
  }

  public async create(dto?: CreateTrackDto): Promise<Track> {
    return this.trackRepo.create({ ...dto, listens: 0 });
  }

  public async update(id: string, dto: UpdateTrackDto): Promise<void> {
    this.trackRepo.update({ ...dto }, { where: { id } });
  }
}
