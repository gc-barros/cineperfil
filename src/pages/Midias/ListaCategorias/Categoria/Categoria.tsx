import styles from "./Categoria.module.scss";
import { ReactComponent as OptionsIcon } from "assets/img/options.svg";
import { ReactComponent as NovaMidiaIcon } from "assets/img/novamidia.svg";
import { ReactComponent as EditIcon } from "assets/img/editicon.svg";
import { ReactComponent as TrashIcon } from "assets/img/trashicon.svg";
import { memo, useState } from "react";

interface Props {
  nome: string,
  tipo: string,
  excluirCategoria: (nome: string) => void;
}

function Categoria({nome, tipo, excluirCategoria}:Props) {
  const [showOptions, setShowOption] = useState(false);
  
  function handleShowOptions() {
    setShowOption(!showOptions);
  }

  return (
    <div className={styles.container}>
      <div className={styles.informacoes}>
        <span className={styles.badge}>{tipo}</span>
        <h3 className={styles.nome}>{nome}</h3>
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
          <button className={styles.botaoExcluir} onClick={() => excluirCategoria(nome)}>
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

export default memo(Categoria);
