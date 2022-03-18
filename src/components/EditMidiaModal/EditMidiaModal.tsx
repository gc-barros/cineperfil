import Botao from "components/Botao";
import Rating from "@mui/material/Rating";
import styles from "./EditMidiaModal.module.scss";
import { useState, Dispatch, SetStateAction } from "react";
import closeicon from "assets/img/closeicon.svg";
import { IMidia } from "types/midia";

interface Props {
  midiaAlvo: IMidia;
  fecharModal: Dispatch<SetStateAction<boolean>>;
  editarMidia: (midiaAlvo: IMidia) => void;
  refCategoria: string;
}
export default function EditMidiaModal({ fecharModal, editarMidia, midiaAlvo, refCategoria }: Props) {
  const [tipoMidia, setTipoMidia] = useState(midiaAlvo.tipo);
  const [nomeMidia, setNomeMidia] = useState(midiaAlvo.nome);
  const [anoMidia, setAnoMidia] = useState(midiaAlvo.ano);
  const [temporadasMidia, setTemporadasMidia] = useState(midiaAlvo.temporadas);
  const [generoMidia, setGeneroMidia] = useState(midiaAlvo.genero);
  const [urlMidia, setUrlMidia] = useState(
    midiaAlvo.url
  );
  const [estrelas, setEstrelas] = useState<number | null>(midiaAlvo.avaliacao);

  return (
    <div className={styles.overlay}>
      <form
        className={styles.container}
        onSubmit={(e) => {
          e.preventDefault();
          editarMidia({
            id: midiaAlvo.id,
            nome: nomeMidia,
            tipo: tipoMidia,
            temporadas: temporadasMidia,
            ano: anoMidia,
            genero: generoMidia,
            url: urlMidia,
            avaliacao: estrelas,
            refCategoria: refCategoria,
          });
          fecharModal(false);
        }}
      >
        <div>
          <h3 className={styles.titulo}>Editar mídia</h3>
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
            value={nomeMidia}
            onChange={(e) => setNomeMidia(e.target.value)}
          />
        </label>

        <label className={styles.label}>
          <span>Tipo</span>
          <select
            className={styles.select}
            value={tipoMidia}
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
              value={temporadasMidia}
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
            value={anoMidia}
            onChange={(e) => setAnoMidia(e.target.value)}
          />
        </label>

        <label className={styles.label}>
          Gênero
          <input
            type="text"
            placeholder="Ação"
            className={styles.input}
            value={generoMidia}
            onChange={(e) => setGeneroMidia(e.target.value)}
          />
        </label>

        <label className={styles.label}>
          URL da imagem (png, jpg...)
          <input
            type="url"
            placeholder="https://www.exemplo.com/img.jpg"
            className={styles.input}
            value={urlMidia}
            onBlur={() => {
              const formatosImg = [
                ".jpg",
                ".png",
                ".jpeg",
                ".tiff",
                ".webp",
                ".bmp",
              ];

              let urlInserida = urlMidia;
              let ehImagem = false;

              for (const formato of formatosImg) {
                if (urlInserida.endsWith(formato)) {
                  ehImagem = true;
                  break;
                }
              }

              if (!ehImagem) {
                setUrlMidia(
                  "https://somos.lojaiplace.com.br/wp-content/uploads/2020/01/cinema-CRED-iStock_Roman-Valiev.jpg"
                );

                return;
              }
            }}
            onChange={(e) => {
              setUrlMidia(e.target.value);
            }}
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

        <Botao>Salvar alterações</Botao>
      </form>
    </div>
  );
}
