import { Injectable, Logger } from '@nestjs/common';
import { IBaseService } from '@backend/common';
import { Track } from './entities/track.entity';
import { InjectModel } from '@nestjs/sequelize';
import { TrackSearchDto } from './dto/track.search.dto';
import { TrackCreateDto } from './dto/track.create.dto';
import { TrackUpdateDto } from './dto/track.update.dto';
@Injectable()
export class TrackService implements IBaseService<Track> {
  private readonly logger = new Logger(TrackService.name);
  constructor(
    @InjectModel(Track)
    protected trackModel: typeof Track,
  ) {}

  public findAll(dto?: TrackSearchDto): Promise<Track[]> {
    return this.trackModel.findAll({ where: { ...dto } });
  }
  public findById(id: string): Promise<Track> | Promise<null> {
    return this.trackModel.findOne({ where: { id } });
  }
  public create(dto: TrackCreateDto): Promise<Track> {
    return this.trackModel.create({ ...dto });
  }
  public update(id: string, dto: TrackUpdateDto): Promise<[affectedCount: number]> {
    return this.trackModel.update({ ...dto }, { where: { id } });
  }
  
}
