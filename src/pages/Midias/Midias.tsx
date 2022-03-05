import CabecalhoInterno from "components/CabecalhoInterno";
import ExibirPerfil from "components/ExibirPerfil";
import Input from "components/Input";
import Rodape from "components/Rodape";
import styles from "./Midias.module.scss";

export default function Midias() {
  return (
    <main className="main">
      <CabecalhoInterno />
      <ExibirPerfil />
      <div className={styles.form}>
        <div className={styles.buscar}>
          <Input label="Buscar categoria" />
        </div>
        <div className={styles.adicionar}>
          <Input label="Criar nova categoria" />
          <select>
            <option value="filmes" selected>
              Filmes
            </option>
            <option value="series">Séries</option>
            <option value="animes">Animes</option>
          </select>
          <button className={styles.botaoAdd}>+</button>
        </div>
      </div>
      <h1>Midias</h1>
      <Rodape />
    </main>
  );
}
