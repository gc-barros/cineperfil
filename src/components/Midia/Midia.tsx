import { useState } from "react";
import { IMidia } from "types/midia";
import styles from "./Midia.module.scss";
import VisualizarMidia from "./VisualizarMidia";

interface Props {
  midia: IMidia;
}

export default function Midia({ midia }: Props) {
  const [showVisualizarMidia, setShowVisualizarMidia] = useState(false);
  return (
    <>
      <div
        className={styles.container}
        onClick={() => {
          if (!showVisualizarMidia) {
            setShowVisualizarMidia(true);
          }
        }}
      >
        <img src={midia.url} alt={`Capa de ${midia.nome}`} />
      </div>

      {showVisualizarMidia && (
        <VisualizarMidia
          midia={midia}
          setShowVisualizarMidia={setShowVisualizarMidia}
        />
      )}
    </>
  );
}
