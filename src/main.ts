import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Validaciones a nivel global
  // Se pueden indicar tantos pipes separados por comas como necesitemos
  app.useGlobalPipes(
    new ValidationPipe({
      // Con esto, la data en JSON que no se correspondan con el DTO se elimina.
      // Pero no se devuelve error.
      whitelist: true, 
      // Se devuelve error si la data enviada en el POST no se corresponde a la esperada en el DTO.
      forbidNonWhitelisted: true
    }),
  )

  await app.listen(3000);
}
bootstrap();
