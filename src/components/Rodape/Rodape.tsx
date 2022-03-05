import styles from "./Rodape.module.scss";

export default function Rodape() {

  return (
    <footer className={styles.footer}>
      ⚡ Desenvolvido por: 
      <a href="https://www.linkedin.com/in/faustinoneto/" rel="noreferrer" target="_blank"> Faustino Neto</a>,
      <a href="https://www.barrosdev.com.br/" rel="noreferrer" target="_blank"> Gabriel Barros</a> &
      <a href="https://github.com/thiagooliveiraaires" rel="noreferrer" target="_blank"> Thiago Aires</a>.
    </footer>
  );
}
