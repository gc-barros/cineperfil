import Botao from "components/Botao";
import CabecalhoInicial from "components/CabecalhoInicial";
import styles from "./Login.module.scss";
import Cinegirl from "assets/img/cinegirl.png";
import Rodape from "components/Rodape";
import Input from "components/Input";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  let navigate = useNavigate();

  return (
    <main className="main">
      <CabecalhoInicial />
      <section className={styles.container}>
        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            console.log(`E-mail: ${email}. Senha: ${senha}`);
            navigate("/midias");
          }}
        >
          <p className={styles.subtitulo}>Bem-vindo de volta, cinéfilo!</p>
          <h1 className={styles.titulo}>Entre com seus dados</h1>
          <Input
            label="E-mail"
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="exemplo@email.com"
          />
          <Input
            label="Senha"
            type="password"
            showIcon={true}
            onChange={(e) => {
              setSenha(e.target.value);
            }}
            placeholder="•••••••••"
          />
          <Botao>Entrar</Botao>
          <span className={styles.criarConta}>
            É novo por aqui? <Link to="/cadastro">Crie sua conta</Link>
          </span>
        </form>
        <div className={styles.imagem}>
          <img src={Cinegirl} alt="Garota surpresa, comendo pipoca." />
        </div>
      </section>
      <Rodape />
    </main>
  );
}
