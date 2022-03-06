import CabecalhoInterno from "components/CabecalhoInterno";
import ExibirPerfil from "components/ExibirPerfil";
import Input from "components/Input";
import { useState } from "react";
import AddCategoria from "./AddCategoria";
import ListaCategorias from "./ListaCategorias";
import styles from "./Midias.module.scss";
import { ICategoria } from "types/categoria";

export default function Midias() {
  const [listaDeCategorias, setListaDeCategorias] = useState<ICategoria[]>([]);

  async function criarNovaCategoria(nome: string, tipo: string) {
    const novaCategoria = {
      nome: nome,
      tipo: tipo,
    };

    const categoriaJaExiste = listaDeCategorias.find(
      (categoria) =>
        categoria.nome.toLowerCase() === novaCategoria.nome.toLowerCase()
    );

    if (categoriaJaExiste) {
      alert("Esta categoria já existe!")
      return
    }

    setListaDeCategorias((listaAnterior) => [...listaAnterior, novaCategoria]);
  }

  return (
    <main className={styles.mainContainer}>
      <CabecalhoInterno />
      <ExibirPerfil />

      <div className={styles.form}>
        <div className={styles.buscar}>
          <Input label="Buscar categoria" />
        </div>

        <AddCategoria criarNovaCategoria={criarNovaCategoria} />
      </div>

      <section className={styles.minhasMidias}>
        <h2 className={styles.titulo}>🎬 Minhas mídias</h2>
        <ListaCategorias listaDeCategorias={listaDeCategorias} />
      </section>
    </main>
  );
}
