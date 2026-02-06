/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common'; // Ajouté
import { AppModule } from './app.module';

import 'dotenv/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: false,
      forbidNonWhitelisted: false,
      transform: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Netflix clone API')
    .setDescription(
      'API documentation for the Netflix clone application created by M2 LDF students Ecole PMN master 2',
    )
    .setContact('Nguetcheu dominique', '', 'dnguetcheu@gmail.com')
    .setVersion('1.0')
    .addTag('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(process.env.PORT as unknown as number);
}
bootstrap();
