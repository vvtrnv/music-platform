import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api/v1';
  const swaggerPrefix = 'docs';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3000;

  if (process.env.SWAGGER) {
    const config = new DocumentBuilder()
    .setTitle('music-platform')
    .setDescription('API')
    .setVersion('1.0')
    .addTag('track')
    .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup(`${globalPrefix}/${swaggerPrefix}`, app, document);
  }

  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
