import styles from "./Categoria.module.scss";
import { ReactComponent as OptionsIcon } from "assets/img/options.svg";
import { ReactComponent as NovaMidiaIcon } from "assets/img/novamidia.svg";
import { ReactComponent as EditIcon } from "assets/img/editicon.svg";
import { ReactComponent as TrashIcon } from "assets/img/trashicon.svg";
import { memo, useState } from "react";
import EditarCategoria from "pages/Midias/EditarCategoria";
import Midia from "components/Midia";

interface Props {
  nome: string;
  tipo: string;
  id: string;
  excluirCategoria: (nome: string) => void;
  editarCategoria: (nome: string, tipo: string, id: string) => void;
}

function Categoria({ nome, tipo, excluirCategoria, editarCategoria, id }: Props) {
  const [showOptions, setShowOption] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  // const [listaMidias, setListaMidias] = useState([]);

  function handleShowOptions() {
    setShowOption(!showOptions);
  }

  function handleShowEditModal() {
    setShowEditModal(!showEditModal);
  }

  return (
    <>
      {showEditModal && (
        <EditarCategoria
          nome={nome}
          tipo={tipo}
          id={id}
          fecharModal={handleShowEditModal}
          editarCategoria={editarCategoria}
        />
      )}
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
            <button
              className={styles.botaoEditar}
              onClick={() => {
                handleShowEditModal();
              }}
            >
              <EditIcon />
              Editar
            </button>
            <button
              className={styles.botaoExcluir}
              onClick={() => excluirCategoria(nome)}
            >
              <TrashIcon />
              Excluir
            </button>
          </div>
        )}

        <ul className={styles.listaMidias}>
          <Midia />
          <button className={styles.botaoNovaMidia}>
            <NovaMidiaIcon />
            <span>Nova mídia</span>
          </button>
        </ul>
      </div>
    </>
  );
}

export default memo(Categoria);
