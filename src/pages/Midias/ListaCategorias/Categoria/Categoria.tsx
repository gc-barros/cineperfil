import styles from "./Categoria.module.scss";
import { ReactComponent as OptionsIcon } from "assets/img/options.svg";
import { ReactComponent as NovaMidiaIcon } from "assets/img/novamidia.svg";
import { ReactComponent as EditIcon } from "assets/img/editicon.svg";
import { ReactComponent as TrashIcon } from "assets/img/trashicon.svg";
import { useState } from "react";

export default function Categoria() {
  const [showOptions, setShowOption] = useState(false);
  
  function handleShowOptions() {
    setShowOption(!showOptions);
  }

  return (
    <div className={styles.container}>
      <div className={styles.informacoes}>
        <span className={styles.badge}>Filmes</span>
        <h3 className={styles.nome}>Não gostei</h3>
        <button className={styles.botaoOpcoes} onClick={handleShowOptions}>
          <OptionsIcon />
        </button>
      </div>

      {showOptions && (
        <div className={styles.boxOpcoes} onBlur={handleShowOptions}>
          <button className={styles.botaoEditar}>
            <EditIcon />
            Editar
          </button>
          <button className={styles.botaoExcluir}>
            <TrashIcon />
            Excluir
          </button>
        </div>
      )}

      <ul className={styles.listaMidias}>
        <button className={styles.botaoNovaMidia}>
          <NovaMidiaIcon />
          <span>Nova mídia</span>
        </button>
   
      </ul>
    </div>
  );
}
