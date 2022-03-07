import Botao from "components/Botao";
import CabecalhoInterno from "components/CabecalhoInterno";
import ExibirPerfil from "components/ExibirPerfil";
import Input from "components/Input";
import Rodape from "components/Rodape";
import styles from "./Perfil.module.scss";
import { ReactComponent as BackArrow } from "assets/img/backarrow.svg";
import { useNavigate } from "react-router-dom";

export default function Perfil() {
  const navigate = useNavigate();

  return (
    <>
      <main className="main">
        <CabecalhoInterno />
        <div className={styles.backArrow}>
          <BackArrow onClick={() => navigate("/midias")} />
        </div>
        <ExibirPerfil />
        <div className={styles.editarDados}>
          <h3>Editar dados</h3>
          <Input label="Nome" value="Gabriel Barros" />
          <Input label="E-mail" value="example@email.com" />
          <Botao>Salvar alterações</Botao>
        </div>
        <div className={styles.gerenciarSenha}>
          <span>
            <hr />
            <p>ou</p>
            <hr />
          </span>
          <div className={styles.botoes}>
            <Botao tipo="secundario">Alterar senha</Botao>
            <Botao tipo="ghost">Excluir conta</Botao>
          </div>
        </div>
      </main>
      <Rodape />
    </>
  );
}
