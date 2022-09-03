import { IsString, MinLength } from "class-validator";
// import { PartialType } from '@nestjs/mapped-types';
// import { CreateBrandDto } from './create-brand.dto';

// Se extiende el DTO CreateBrandDto, pero con PartialType se indica que las variables son opcionales.
// Tiene más sentido cuando CreateBrandDto tiene más de una propiedad
// export class UpdateBrandDto extends PartialType(CreateBrandDto) {}

export class UpdateBrandDto{

  @IsString()
  @MinLength(1)
  name: string;
}
