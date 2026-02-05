import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import 'dotenv/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = Number(process.env.PORT) || 3000;
  await app.listen(port);

  console.log(`🚀 Application running on http://localhost:${port}`);
}
bootstrap();
