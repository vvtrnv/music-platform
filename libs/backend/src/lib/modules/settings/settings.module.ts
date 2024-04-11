import { Module } from '@nestjs/common';
import { SettingsService } from './settings.service';
import { SettingsController } from './settings.controller';
import { SettingsEntity } from './entities/settings.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [SettingsService],
  controllers: [SettingsController],
  imports: [
    TypeOrmModule.forFeature([SettingsEntity]),
  ],
})
export class SettingsModule {}
