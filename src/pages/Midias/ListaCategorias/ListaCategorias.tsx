import Categoria from "./Categoria";
import styles from "./ListaCategorias.module.scss";
import { ICategoria } from "types/categoria";

interface Props {
  listaDeCategorias: ICategoria[];
  excluirCategoria: (nome: string) => void;
  editarCategoria: (nome: string, tipo: string, id: string) => void;
}

export default function ListaCategorias({ listaDeCategorias, excluirCategoria, editarCategoria }: Props) {
  return (
    <ul className={styles.lista}>
      {listaDeCategorias.length === 0 ? "👻 Nenhuma categoria de mídias encontrada." :
        listaDeCategorias.map((categoria) => (
          <Categoria
            nome={categoria.nome}
            tipo={categoria.tipo}
            id={categoria.id}
            key={categoria.id}
            excluirCategoria={excluirCategoria}
            editarCategoria={editarCategoria}
          />
        ))}
    </ul>
  );
}
