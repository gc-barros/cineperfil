import {IMidia} from './midia';

export interface ICategoria {
  nome: string;
  tipo: string;
  id: string;
  midias?: IMidia[];
}
