import { Module } from '@nestjs/common';
import { databaseConfig } from '../database.config';
import { TrackEntity, TrackModule } from '../modules/track';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileEntity, S3MinioModule, SettingsEntity, SettingsModule } from '@backend/common';
import { ArtistEntity, ArtistModule } from '../modules/artist';
import { ConfigModule } from '@nestjs/config';
import { minioConfig } from '../minio.config';

const configuration = [
  ConfigModule.forRoot({
    isGlobal: true,
    load: [() => ({
      minio: minioConfig,
      database: databaseConfig,
    })],
  }),
];

const database = [
  TypeOrmModule.forRoot({
    ...databaseConfig,
    type: 'postgres',
    synchronize: true,
    entities: [
      TrackEntity,
      FileEntity,
      SettingsEntity,
      ArtistEntity,
    ],
    logging: true,
  }),
];

@Module({
  imports: [
    TrackModule,
    ArtistModule,
    SettingsModule,
    S3MinioModule,
    ...configuration,
    ...database,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
