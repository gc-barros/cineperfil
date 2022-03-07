import Botao from "components/Botao";
import Rating from "@mui/material/Rating";
import styles from "./AddMidiaModal.module.scss";
import { useState, Dispatch, SetStateAction } from "react";
import closeicon from "assets/img/closeicon.svg";
import { IMidia } from 'types/midia';
import { v4 as uuidv4 } from "uuid";

interface Props {
  fecharModal: Dispatch<SetStateAction<boolean>>;
  adicionarMidia: (midia: IMidia) => void;
}
export default function Midia({fecharModal, adicionarMidia}:Props) {
  const [tipoMidia, setTipoMidia] = useState("Filmes");
  const [nomeMidia, setNomeMidia] = useState("");
  const [anoMidia, setAnoMidia] = useState("");
  const [temporadasMidia, setTemporadasMidia] = useState("");
  const [generoMidia, setGeneroMidia] = useState("");
  const [urlMidia, setUrlMidia] = useState(
    "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/54/04/20150812.jpg"
  );
  const [estrelas, setEstrelas] = useState<number | null>(0);

  return (
    <div className={styles.overlay}>
      <form
        className={styles.container}
        onSubmit={(e) => {
          e.preventDefault();
          adicionarMidia({
            id: uuidv4(),
            nome: nomeMidia,
            tipo: tipoMidia,
            temporadas: temporadasMidia,
            ano: anoMidia,
            genero: generoMidia,
            url: urlMidia,
            avaliacao: estrelas,
          });
        }}
      >
        <div>
          <h3 className={styles.titulo}>Nova mídia</h3>
          <button
            className={styles.botaoClose}
            title="Fechar modal"
            onClick={() => fecharModal(false)}
          >
            <img src={closeicon} alt="" />
          </button>
        </div>

        <label className={styles.label}>
          Nome
          <input
            required
            type="text"
            placeholder="Avengers Endgame"
            className={styles.input}
            onChange={(e) => setNomeMidia(e.target.value)}
          />
        </label>

        <label className={styles.label}>
          <span>Tipo</span>
          <select
            className={styles.select}
            onChange={(e) => {
              setTipoMidia(e.target.value);
            }}
          >
            <option value="Filmes">Filmes</option>
            <option value="Séries">Séries</option>
            <option value="Animes">Animes</option>
          </select>
        </label>

        {tipoMidia !== "Filmes" && (
          <label className={styles.label}>
            Temporadas
            <input
              type="text"
              placeholder="3"
              className={styles.input}
              onChange={(e) => setTemporadasMidia(e.target.value)}
            />
          </label>
        )}

        <label className={styles.label}>
          Ano
          <input
            type="text"
            placeholder="2019"
            className={styles.input}
            onChange={(e) => setAnoMidia(e.target.value)}
          />
        </label>

        <label className={styles.label}>
          Gênero
          <input
            type="text"
            placeholder="Ação"
            className={styles.input}
            onChange={(e) => setGeneroMidia(e.target.value)}
          />
        </label>

        <label className={styles.label}>
          URL da imagem
          <input
            type="url"
            placeholder="https://www.exemplo.com/img.jpg"
            className={styles.input}
            onChange={(e) => setUrlMidia(e.target.value)}
          />
        </label>

        <label className={styles.label}>
          Avaliação
          <div>
            <Rating
              size="large"
              name="simple-controlled"
              value={estrelas}
              onChange={(event, newValue) => {
                setEstrelas(newValue);
              }}
              className={styles.estrelas}
              precision={0.5}
            />
          </div>
        </label>

        <Botao>Adicionar</Botao>
      </form>
    </div>
  );
}
