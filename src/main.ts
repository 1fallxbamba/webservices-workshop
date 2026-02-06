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
  .build()

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);

  SwaggerModule.setup('docs', app, swaggerDocument)
  await app.listen(process.env.PORT as unknown as number);
  //await app.listen(process.env.PORT as unknown as number  ?? 5000);

}
bootstrap();
