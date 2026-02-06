/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

import 'dotenv/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const swaggerConfig = new DocumentBuilder()
  .setTitle('Netflix Clone API Documentation')
  .setDescription('API documentation for the Netflix Clone API created by M2 LFD Ecole PMN masters')
  .setContact('Bamba Fall', '', 'bamba@google.com')
  .setVersion('1.0')
  .build();

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);

  SwaggerModule.setup('docs', app, swaggerDocument)

  await app.listen(process.env.PORTS as unknown as number);
}
bootstrap();
