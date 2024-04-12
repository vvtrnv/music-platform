import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { SettingsEntity } from './entities/settings.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { SettingsSearchDto } from './dto/settings.search.dto';

@Injectable()
export class SettingsService {
  constructor(
    @InjectRepository(SettingsEntity)
    protected settingsRepo: Repository<SettingsEntity>
  ) {}

  public find(dto?: SettingsSearchDto): Promise<SettingsEntity[]> {
    return this.settingsRepo.find({ where: { ...dto } });
  }
}
