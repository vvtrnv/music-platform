import { Module } from '@nestjs/common';
import { TrackService } from './track.service';
import { TrackController } from './track.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Track } from './entities/track.entity';
import { FilesModule } from '@backend/common';


@Module({
  imports: [
    SequelizeModule.forFeature([
      Track,
    ]),
    FilesModule,
  ],
  providers: [
    TrackService,
  ],
  controllers: [TrackController],
})
export class TrackModule {}
