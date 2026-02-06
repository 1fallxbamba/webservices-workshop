import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import 'dotenv/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Netflix Clone API documentation')
    .setDescription('API which simulates Netflix API.')
    .setContact('Léa PAUCHOT', '', 'lea.pauchot@gmail.com')
    .setVersion('1.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, documentFactory);

  const port = Number(process.env.PORT) || 3000;
  await app.listen(port);

  console.log(`🚀 Application running on http://localhost:${port}`);
}
bootstrap();
