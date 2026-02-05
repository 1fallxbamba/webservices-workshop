import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import 'dotenv/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const port = Number(process.env.PORT) || 3000;
  await app.listen(port);

  console.log(`🚀 Application running on http://localhost:${port}`);
}
bootstrap();
