import { Module } from '@nestjs/common';
import { TrackService } from './track.service';
import { TrackController } from './track.controller';
import { TrackEntity } from './entities/track.entity';
import { FilesModule } from '@backend/common';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    TypeOrmModule.forFeature([
      TrackEntity,
    ]),
    FilesModule,
  ],
  providers: [
    TrackService,
  ],
  controllers: [TrackController],
})
export class TrackModule {}
