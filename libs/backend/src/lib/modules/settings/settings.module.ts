import { Module } from '@nestjs/common';
import { SettingsService } from './settings.service';
import { SettingsController } from './settings.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Settings } from './entities/settings.entity';

@Module({
  providers: [SettingsService],
  controllers: [SettingsController],
  imports: [
    SequelizeModule.forFeature([Settings]),
  ],
})
export class SettingsModule {}
