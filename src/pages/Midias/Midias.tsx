import CabecalhoInterno from "components/CabecalhoInterno";
import ExibirPerfil from "components/ExibirPerfil";
import Input from "components/Input";
import { useEffect, useState } from "react";
import AddCategoria from "./AddCategoria";
import ListaCategorias from "./ListaCategorias";
import styles from "./Midias.module.scss";
import { ICategoria } from "types/categoria";
import { v4 as uuidv4 } from "uuid";
import Rodape from "components/Rodape";

export default function Midias() {
  const [listaDeCategorias, setListaDeCategorias] = useState<ICategoria[]>([]);
  const [busca, setBusca] = useState("");
  const [listaFiltrada, setListaFiltrada] = useState(listaDeCategorias);

  function criarNovaCategoria(nome: string, tipo: string) {
    const novaCategoria = {
      nome: nome,
      tipo: tipo,
      id: uuidv4()
    };

    const categoriaJaExiste = listaDeCategorias.find(
      (categoria) =>
        categoria.nome.toLowerCase() === novaCategoria.nome.toLowerCase()
    );

    if (categoriaJaExiste) {
      alert("Esta categoria já existe!");
      return;
    }

    setListaDeCategorias((listaAnterior) => [...listaAnterior, novaCategoria]);
  }

  function excluirCategoria(nome: string) {
    setListaDeCategorias((listaAnterior) =>
      listaAnterior.filter((categoria) => categoria.nome !== nome)
    );
  }

  function editarCategoria(nome: string, tipo: string, id: string) {
    console.log(nome, tipo, id);
    setListaDeCategorias(listaAnterior => listaAnterior.map(categoria => {
      if (categoria.id === id) {
        categoria.nome = nome;
        categoria.tipo = tipo;
      }

      return categoria;
    }))
  }

  useEffect(() => {
    const novaLista = listaDeCategorias.filter((categoria) => {
      const nomeCategoria = categoria.nome.toLowerCase();
      const nomeBusca = busca.toLowerCase();

      return (
        nomeCategoria.includes(nomeBusca)
      )
    }
    );

    setListaFiltrada(novaLista);
  }, [busca, listaDeCategorias]);

  return (
    <>
      <main className={styles.mainContainer}>
        <CabecalhoInterno />
        <ExibirPerfil />
  
        <div className={styles.form}>
          <div className={styles.buscar}>
            <Input
              label="Buscar categoria"
              placeholder="Melhores animes"
              onChange={(e) => setBusca(e.target.value)}
            />
          </div>
  
          <AddCategoria criarNovaCategoria={criarNovaCategoria} />
        </div>
  
        <section className={styles.minhasMidias}>
          <h2 className={styles.titulo}>🎬 Minhas mídias</h2>
          <ListaCategorias
            listaDeCategorias={listaFiltrada}
            excluirCategoria={excluirCategoria}
            editarCategoria={editarCategoria}
          />
        </section>
      </main>
      <Rodape />
    </>
  );
}
