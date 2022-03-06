import Categoria from "./Categoria";
import styles from "./ListaCategorias.module.scss";
import { ICategoria } from "types/categoria";

interface Props {
  listaDeCategorias: ICategoria[];
}

export default function ListaCategorias({ listaDeCategorias }: Props) {
  return (
    <ul className={styles.lista}>
      {listaDeCategorias.map((categoria) => (
        <Categoria
          nome={categoria.nome}
          tipo={categoria.tipo}
          key={categoria.nome}
        />
      ))}
    </ul>
  );
}
