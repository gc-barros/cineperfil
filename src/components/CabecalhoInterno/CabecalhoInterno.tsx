import styles from "./CabecalhoInterno.module.scss";
import logo from "assets/img/logo.svg";
import { useNavigate } from "react-router-dom";
import dogcinema from "assets/img/dogcinema.jpg";
import { ReactComponent as IconeSair } from "assets/img/iconsair.svg";

export default function CabecalhoInicial() {
  let navigate = useNavigate();

  return (
    <header className={styles.container}>
      <div className={styles.logo} onClick={() => navigate("/midias")}>
        <img src={logo} alt="Logo Cineperfil" />
      </div>
      <div className={styles.botoes}>
        <button
          className={styles.botaoPerfil}
          onClick={() => navigate("/perfil")}
        >
          <img src={dogcinema} alt="Foto de perfil do usuário" />
          <span>Gabriel</span>
        </button>
        <button
          className={styles.botaoSair}
          onClick={() => navigate("/")}
        >
          <IconeSair />
          Sair
        </button>
      </div>
    </header>
  );
}
