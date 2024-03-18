import { Module } from '@nestjs/common';

import { TrackModule } from '../modules/track/track.module';

@Module({
  imports: [
    TrackModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
