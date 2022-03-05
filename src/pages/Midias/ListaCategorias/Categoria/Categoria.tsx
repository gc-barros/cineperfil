import styles from "./Categoria.module.scss";
import { ReactComponent as OptionsIcon } from "assets/img/options.svg";
import { ReactComponent as NovaMidiaIcon } from "assets/img/novamidia.svg";


export default function Categoria() {
  return (
    <div className={styles.container}>
      <div className={styles.informacoes}>
        <span className={styles.badge}>Filmes</span>
        <h3 className={styles.nome}>Não gostei</h3>
        <button className={styles.botaoOpcoes}>
          <OptionsIcon />
        </button>
      </div>

      <ul className={styles.listaMidias}>
        <button className={styles.botaoNovaMidia}>
          <NovaMidiaIcon />
          <span>Nova mídia</span>
        </button>
      </ul>
    </div>
  );
}
