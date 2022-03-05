import Botao from "components/Botao";
import CabecalhoInicial from "components/CabecalhoInicial";
import Rodape from "components/Rodape";
import styles from './NoMatch.module.scss';
import pipoca404 from "assets/img/pipoca404.png"
import { useNavigate } from "react-router-dom";

export default function NoMatch() {
  let navigate = useNavigate();

  return (
    <section className={styles.principal}>
      <CabecalhoInicial />
      <div className={styles.container}>
        <div className={styles.imagem}><img src={pipoca404} alt="Pipoca derramada" /></div>
        <h1 className={styles.titulo}>Ops, página não encontrada!</h1>
        <Botao onClick={() => navigate('/')}>Voltar ao início</Botao>
      </div>
      <Rodape />
    </section>
  );
}