import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';


@Module({
  controllers: [ CarsController ],
  providers: [CarsService],
  // Tenemos que exportar para acceder a el fuera de este módulo.
  // Esto es lo que el mundo externo va a conocer de este módulo.
  exports: [CarsService]
})
export class CarsModule {}
