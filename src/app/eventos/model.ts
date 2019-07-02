import { Categoria } from '../categorias/model';

export class Evento{
  id: number;
  data: string;
  cidade: string;
  nome: string;
  categorias: Categoria[];

}
