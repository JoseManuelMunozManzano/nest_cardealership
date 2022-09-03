// El entity es una abstracción de como luce la información en la BBDD.
// El nombre no es BrandEntity porque en ese caso en BBDD la tabla se llamaría BrandEntity.

export class Brand {

  id: string;
  name: string;

  createdAt: number;
  updatedAt?: number;

}
