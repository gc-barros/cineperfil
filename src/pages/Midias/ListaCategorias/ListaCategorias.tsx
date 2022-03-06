import Categoria from "./Categoria";
import styles from "./ListaCategorias.module.scss";
import { ICategoria } from "types/categoria";

interface Props {
  listaDeCategorias: ICategoria[];
  excluirCategoria: (nome: string) => void;
}

export default function ListaCategorias({ listaDeCategorias, excluirCategoria }: Props) {
  return (
    <ul className={styles.lista}>
      {listaDeCategorias.length === 0 ? "👻 Nenhuma categoria de mídias encontrada." :
        listaDeCategorias.map((categoria) => (
          <Categoria
            nome={categoria.nome}
            tipo={categoria.tipo}
            key={categoria.nome}
            excluirCategoria={excluirCategoria}
          />
        ))}
    </ul>
  );
}
