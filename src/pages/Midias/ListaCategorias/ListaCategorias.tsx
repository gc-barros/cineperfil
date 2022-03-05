import Categoria from "./Categoria";
import styles from "./ListaCategorias.module.scss";

export default function ListaCategorias() {
  return (
    <ul className={styles.lista}>
      <Categoria />
    </ul>
  )
}