import styles from "./CabecalhoInicial.module.scss";
import logo from "assets/img/logo.svg";
import Botao from "components/Botao";
import { useNavigate } from "react-router-dom";

export default function CabecalhoInicial() {

  let navigate = useNavigate();

  return (
    <header className={styles.container}>
      <div className={styles.logo} onClick={() => navigate("/")}>
        <img src={logo} alt="Logo Cineperfil" />
      </div>
      <div className={styles.botoes}>
        <Botao tipo="ghost" onClick={() => navigate("/login")}>
          Entrar
        </Botao>
        <Botao tipo="secundario" onClick={() => navigate("/cadastro")}>
          Criar conta
        </Botao>
      </div>
    </header>
  );
}
