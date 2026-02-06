import { NestFactory } from '@nestjs/core';
<<<<<<< HEAD
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

import 'dotenv/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORTS as unknown as number);
=======
import { AppModule } from './app.module';

import 'dotenv/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
<<<<<<< HEAD
  await app.listen(process.env.PORT ?? 3000);
>>>>>>> 09a7179 (The commit)
=======
  await app.listen(process.env.PORT as unknown as number);
>>>>>>> d6a2aab (create movies API)
}
bootstrap();
