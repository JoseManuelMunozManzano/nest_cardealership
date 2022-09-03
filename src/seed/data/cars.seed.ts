import {v4 as uuid} from 'uuid'

import { Car } from "src/cars/interfaces/car.interface";

// Las interfaces y clases sin dependencias (como clases entity o la de Car) se pueden importar 
// aunque no sean parte del módulo.
// Hay otras cosas que si requieren que se importe el módulo en seed.module.ts

// De nuevo, esto se haría directamente contra BD de pruebas en Docker

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'toyota',
    model: 'corolla',
  },

  {
    id: uuid(),
    brand: 'honda',
    model: 'civic',
  },

  {
    id: uuid(),
    brand: 'jeep',
    model: 'cherokee',
  },
]
