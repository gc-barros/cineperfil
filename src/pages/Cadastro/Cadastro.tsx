import CabecalhoInicial from "components/CabecalhoInicial";
import styles from './Cadastro.module.scss';
import Rodape from "components/Rodape";
import Botao from "components/Botao";
import Input from "components/Input";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaConfirmacao, setSenhaConfirmacao] = useState("");

  return (
    <main className={styles.principal}>
      <CabecalhoInicial />
      <section className={styles.container}>
        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            console.log(
              `Nome: ${nome}. E-mail: ${email}. Senha: ${senha}. Confirmação da senha: ${senhaConfirmacao}`
            );
          }}
        >
          <p className={styles.subtitulo}>Rápido, fácil e gratuito!</p>
          <h1 className={styles.titulo}>Seja um cinéfilo</h1>
          <Input
            label="Nome"
            type="text"
            onChange={(e) => {
              setNome(e.target.value);
            }}
            placeholder="Tony Stark"
          />
          <Input
            label="E-mail"
            type="email"
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
            placeholder="•••••••••••"
          />
          <Input
            label="Confirmar senha"
            type="password"
            showIcon={true}
            onChange={(e) => {
              setSenhaConfirmacao(e.target.value);
            }}
            placeholder="•••••••••••"
          />
          <Botao>Criar conta</Botao>
          <span className={styles.criarConta}>
            Já possui uma conta? <Link to="/login">Faça login</Link>
          </span>
        </form>
      </section>
      <Rodape />
    </main>
  );
}