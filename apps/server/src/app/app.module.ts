import { Module } from '@nestjs/common';
import { databaseOptions } from '../database';
import { TrackEntity, TrackModule } from '../modules/track';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileEntity, SettingsEntity } from '@backend/common';

@Module({
  imports: [
    TrackModule,
    TypeOrmModule.forRoot({
      ...databaseOptions,
      type: 'postgres',
      synchronize: true,
      entities: [
        TrackEntity,
        FileEntity,
        SettingsEntity,
      ],
      logging: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
