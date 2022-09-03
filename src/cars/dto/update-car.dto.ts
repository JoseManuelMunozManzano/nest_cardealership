import { IsOptional, IsString, IsUUID } from "class-validator";

// Aunque se indica que es opcional, también a nivel TypeScript se indica que es opcional con ?

export class UpdateCarDto {

  @IsString()
  @IsUUID()
  @IsOptional()
  readonly id?: string;

  @IsString()
  @IsOptional()
  readonly brand?: string;

  @IsString()
  @IsOptional()
  readonly model?: string;
  
}
