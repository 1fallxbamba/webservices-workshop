import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';


import 'dotenv/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Netflix Clone API Documentation')
    .setDescription('API description for the Netflix Clone API created by M2 LFD Ecole PMN Masters')
    .setContact('Douaa ', '', 'douaa@google.com')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

    const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup('docs', app, swaggerDocument);

  await app.listen(process.env.PORT as unknown as number);
}
bootstrap();
