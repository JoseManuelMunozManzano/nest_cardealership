// Como se espera mover la data en la aplicación
// Es buena práctica que sean readonly para no modificar lo que nos llega en el request

import { IsString } from "class-validator";

export class CreateCarDto {

  @IsString()
  readonly brand: string;

  @IsString()
  readonly model: string;
  
}
