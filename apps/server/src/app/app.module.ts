import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { databaseOptions } from '../database';
import { TrackModule } from '../modules/track';

@Module({
  imports: [
    TrackModule,
    SequelizeModule.forRoot({
      ...databaseOptions,
      dialect: 'postgres',
      autoLoadModels: false,
      synchronize: false,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
