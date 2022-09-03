import { Module } from '@nestjs/common';
import { CarsModule } from '../cars/cars.module';
import { BrandsModule } from '../brands/brands.module';

import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  // Tenemos que importar el módulo para acceder a su servicio, controlador...
  // Se tratan como Singleton
  // No olvidar en los módulos CarsModule y BrandsModule exportar el servicio, 
  // controlador... que necesitemos
  imports: [CarsModule, BrandsModule]
})
export class SeedModule {}
