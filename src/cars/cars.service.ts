import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import {v4 as uuid} from 'uuid';

import { CreateCarDto, UpdateCarDto } from './dto';
import { Car } from './interfaces/car.interface';

// To-dos los @Injectable() son providers

@Injectable()
export class CarsService {

  private cars:Car[] = [
    // {
    //   id: uuid(),
    //   brand: 'Toyota',
    //   model: 'Corolla'
    // },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find(car => car.id === id);

    if (!car) throw new NotFoundException(`Car with id '${id}' not found`);
    
    return car;
  }

  create(createCarDto: CreateCarDto): Car {
    const car: Car = {
      id: uuid(),
      ...createCarDto
    }

    this.cars.push(car);

    return car;
  }

  update(id: string, updateCarDto: UpdateCarDto): Car {

    let carDB = this.findOneById(id);

    if (updateCarDto.id && updateCarDto.id !== id) {
      throw new BadRequestException(`Car id is not valid inside body`);
    }

    this.cars = this.cars.map(car => {
      if (car.id === id) {        
        // Si o si me quedo con el id de carDB, las demás propiedades las puede sobreescibir lo que me venga
        // en updateCarDto
        carDB = {...carDB, ...updateCarDto, id};
        return carDB;
      }

      return car;
    });

    return carDB;
  }

  delete(id: string) {
    this.findOneById(id);
    this.cars = this.cars.filter(car => car.id !== id);    
  }

  fillCarsWithSeedData(cars: Car[]) {
    this.cars = cars;
  }

}
