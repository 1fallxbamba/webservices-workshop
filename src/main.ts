/*import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

import 'dotenv/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORTS as unknown as number);
}
bootstrap();*/


/*import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);

  const port = process.env.PORT || 3000;
  
  
  await app.listen(port);

  console.log(`Server running on http://localhost:${port}`);
}
bootstrap();*/

/* eslint-disable prettier/prettier */
/*import { NestFactory } from '@nestjs/core';
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
  .setContact('Oumayma Djebali', '', 'omayma.djebali@gmail.com')
  .setVersion('1.0')
  .addApiKey(({
    type: 'apiKey',
    name: process.env.API_AUTH_TOKEN_NAME,
    in: 'header',
    description: 'API authentication token, you can get it from the .env file or ask the developer for it',
  }), 'API_AUTH_TOKEN')
  .build();

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);

  SwaggerModule.setup('docs', app, swaggerDocument)

  await app.listen(process.env.PORTS as unknown as number);
}
bootstrap();*/

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();

  const app = await NestFactory.create(AppModule);

  // Validation globale
  app.useGlobalPipes(new ValidationPipe());

  // Configuration Swagger
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Netflix Clone API Documentation')
    .setDescription(
      'API documentation for the Netflix Clone API created by M2 LFD Ecole PMN masters',
    )
    .setContact('Oumayma Djebali', '', 'omayma.djebali@gmail.com')
    .setVersion('1.0')
    .addApiKey(
      {
        type: 'apiKey',
        name: process.env.API_AUTH_TOKEN_NAME,
        in: 'header',
        description:
          'API authentication token, you can get it from the .env file or ask the developer for it',
      },
      'API_AUTH_TOKEN',
    )
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('docs', app, document);

  // Port
  const port = Number(process.env.PORT) || 3000;
  await app.listen(port);

  console.log(`Server running on http://localhost:${port}`);
  console.log(`Swagger available on http://localhost:${port}/docs`);
}

bootstrap();


