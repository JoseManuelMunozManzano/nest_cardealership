import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

// Los pipes transforman la data.
// Con @UsePipes indicamos que usamos pipes. Se usa ValidationPipe para validar la información del request.
// En el DTO se indican que validaciones deben cumplir los datos.
// Lo dejamos comentado porque se va a llevar a nivel global, para toda la app
@Controller('cars')
//@UsePipes(ValidationPipe)
export class CarsController {  

  constructor(
    private readonly carsService: CarsService
  ) {};

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id', new ParseUUIDPipe({version: '4'})) id: string) {    
    //Ejemplo de status 500
    //throw new Error('Auxilio');

    return this.carsService.findOneById(id);
  }

  @Post()  
  createCar(@Body() createCarDto: CreateCarDto) {   
    return this.carsService.create(createCarDto);;
  }

  @Patch(':id')
  updateCar(
    @Param('id', ParseUUIDPipe) id: string, 
    @Body() updateCarDto: UpdateCarDto) 
  {
    return this.carsService.update(id, updateCarDto);
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseUUIDPipe) id: string) {
    this.carsService.delete(id);
  }
}
