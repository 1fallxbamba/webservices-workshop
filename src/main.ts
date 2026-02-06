import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

import 'dotenv/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

const swaggerConfig = new DocumentBuilder()
  .setTitle('Netflix API')
  .setDescription('API for managing movies, users, playlists and partners')
  .setContact('Emmanuel', '', 'emmanuel@example.com')
  .setVersion('1.0')
  .build()

const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
SwaggerModule.setup('docs', app, swaggerDocument);

  await app.listen(process.env.PORT as unknown as number);
}
bootstrap();
