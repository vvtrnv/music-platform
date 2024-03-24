import { Module } from '@nestjs/common';
import { TrackService } from './track.service';
import { TrackController } from './track.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Track } from './entities/track.entity';


@Module({
  imports: [
    SequelizeModule.forFeature([
      Track,
    ]),
  ],
  providers: [
    TrackService,
  ],
  controllers: [TrackController],
})
export class TrackModule {}
