import Botao from "components/Botao";
import CabecalhoInicial from "components/CabecalhoInicial";
import styles from './Login.module.scss';
import Cinegirl from 'assets/img/cinegirl.png';
import Rodape from "components/Rodape";
import InputText from "components/InputText";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <main>
      <CabecalhoInicial />
      <section className={styles.container}>
        <form className={styles.form}>
          <p className={styles.subtitulo}>Bem-vindo de volta, cinéfilo!</p>
          <h1 className={styles.titulo}>Entre com seus dados</h1>
          <InputText label="E-mail" type="email"/>
          <InputText label="Senha" type="password"/>
          <Botao>Entrar</Botao>
          <span className={styles.criarConta}>É novo por aqui? <Link to="/cadastro">Crie sua conta</Link></span>
        </form>
        <div className={styles.imagem}>
          <img
            src={Cinegirl}
            alt="Garoto surpreso, segurando refrigerante e balde de pipoca."
          />
        </div>
      </section>
      <Rodape />
    </main>
  );
}
