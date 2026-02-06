import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe);
  const swaggerConfig = new DocumentBuilder()
  .setTitle('Netflix Clone API')
  .setDescription('API documentation for the clone API Netflix')
  .setVersion('1')
  .addApiKey(
  ({
    type: 'apiKey',
    name: process.env.JWT_SECRET,
    in: 'header',
    description: 'API authentication token, you can get it from the .env file or ask the developer for it',
  }), 'API_AUTH_TOKEN')
  .build()

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);

  SwaggerModule.setup('docs', app, swaggerDocument)
  await app.listen(process.env.PORT as unknown as number);
  //await app.listen(process.env.PORT as unknown as number  ?? 5000);

}
bootstrap();
