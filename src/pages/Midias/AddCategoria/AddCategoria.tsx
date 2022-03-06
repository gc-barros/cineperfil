import Input from "components/Input";
import { useState } from "react";
import styles from "./AddCategoria.module.scss";

interface Props {
  criarNovaCategoria: (nome: string, tipo: string) => void;
}

export default function AddCategoria({ criarNovaCategoria }: Props) {
  const [novaCategoriaNome, setNovaCategoriaNome] = useState("");
  const [novaCategoriaTipo, setNovaCategoriaTipo] = useState<string>("Filmes");

  function handleCriarNovaCategoria() {
     if (novaCategoriaNome !== "") {
       criarNovaCategoria(novaCategoriaNome, novaCategoriaTipo);
       setNovaCategoriaNome("");
       setNovaCategoriaTipo("Filmes");
     } else {
       alert("Insira um nome para a nova categoria.");
     }
  }

  return (
    <div className={styles.adicionar}>
      <Input
        label="Adicionar nova categoria"
        onChange={(e) => setNovaCategoriaNome(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleCriarNovaCategoria();
          }
        }}
        value={novaCategoriaNome}
      />
      <select onChange={(e) => setNovaCategoriaTipo(e.target.value)} value={novaCategoriaTipo}>
        <option value="Filmes">Filmes</option>
        <option value="Séries">Séries</option>
        <option value="Animes">Animes</option>
      </select>
      <button
        className={styles.botaoAdd}
        onClick={() => {
         handleCriarNovaCategoria();
        }}
      >
        +
      </button>
    </div>
  );
}
