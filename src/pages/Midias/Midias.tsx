import CabecalhoInterno from "components/CabecalhoInterno";
import ExibirPerfil from "components/ExibirPerfil";
import Input from "components/Input";
import ListaCategorias from "./ListaCategorias";
import styles from "./Midias.module.scss";

export default function Midias() {
  return (
    <main className={styles.mainContainer}>
      <CabecalhoInterno />
      <ExibirPerfil />

      <div className={styles.form}>
        <div className={styles.buscar}>
          <Input label="Buscar categoria" />
        </div>
        <div className={styles.adicionar}>
          <Input label="Adicionar nova categoria" />
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

      <section className={styles.minhasMidias}>
        <h2 className={styles.titulo}>🎬 Minhas mídias</h2>
        <ListaCategorias />
      </section>
    </main>
  );
}
