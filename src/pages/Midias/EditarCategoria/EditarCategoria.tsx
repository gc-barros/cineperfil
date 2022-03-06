import Input from "components/Input";
import { useState } from "react";
import styles from "./EditarCategoria.module.scss";
import closeicon from 'assets/img/closeicon.svg';

interface Props {
  editarCategoria: (nome: string, tipo: string, id: string) => void;
  fecharModal: ()=>void;
  nome: string;
  tipo: string;
  id: string;
}

export default function AddCategoria({ editarCategoria, fecharModal, nome, tipo, id }: Props) {
  const [novaCategoriaNome, setNovaCategoriaNome] = useState(nome);
  const [novaCategoriaTipo, setNovaCategoriaTipo] = useState<string>(tipo);

  function handleEditarCategoria() {
     if (novaCategoriaNome !== "") {
      editarCategoria(novaCategoriaNome, novaCategoriaTipo, id);
      fecharModal();

     } else {
       alert("Insira um nome válido.");
     }
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.adicionar}>
        <button className={styles.botaoClose} title="Fechar modal" onClick={() => fecharModal()}>
          <img src={closeicon} alt="" />
        </button>
        <Input
          label="Editar categoria"
          onChange={(e) => setNovaCategoriaNome(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleEditarCategoria();
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
           handleEditarCategoria();
          }}
        >
          Salvar alterações
        </button>
      </div>
    </div>
  );
}
