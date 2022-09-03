import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeedService } from './seed.service';

// La idea de este módulo es precargar datos ficticios para pruebas.
// Lo suyo sería precarga una BD de Docker para las pruebas.

@Controller('seed')
export class SeedController {

  constructor(private readonly seedService: SeedService) {}

  @Get()
  runSeed() {
    return this.seedService.populateDB();
  }

}
