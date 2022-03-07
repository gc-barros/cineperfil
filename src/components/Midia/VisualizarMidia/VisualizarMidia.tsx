import { Rating } from "@mui/material";
import Botao from "components/Botao";
import { IMidia } from "types/midia";
import closeicon from "assets/img/closeicon.svg";
import styles from "./VisualizarMidia.module.scss";

interface Props {
  midia: IMidia;
  setShowVisualizarMidia: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function VisualizarMidia({ midia, setShowVisualizarMidia }: Props) {
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h3>{midia.nome}</h3>
          <button
            className={styles.botaoClose}
            title="Fechar modal"
            onClick={() => setShowVisualizarMidia(false)}
          >
            <img src={closeicon} alt="" />
          </button>
        </div>
        <div className={styles.content}>
          <div>
            <img src={midia.url} alt={midia.nome} />
          </div>
          <div className={styles.informacoes}>
            <span>
              <strong>Tipo:</strong> {midia.tipo}
            </span>
            <span>
              <strong>Ano:</strong> {midia.ano}
            </span>
            {midia.tipo === "Série" && (
              <span>
                <strong>Temporadas:</strong> {midia.temporadas}
              </span>
            )}
            <span>
              <strong>Gênero:</strong> {midia.genero}
            </span>
            <Rating value={midia.avaliacao} precision={0.5} readOnly />
            <div className={styles.botoes}>
              <Botao tipo="ghost">Editar</Botao>
              <Botao tipo="secundario">Excluir</Botao>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
