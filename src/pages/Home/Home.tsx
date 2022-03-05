import Botao from 'components/Botao';
import CabecalhoInicial from 'components/CabecalhoInicial';
import Cineboy from 'assets/img/cineboy.png';
import styles from './Home.module.scss';
import Rodape from 'components/Rodape';
import { useNavigate } from "react-router-dom";

export default function Home() {

  let navigate = useNavigate();

  return (
    <main className='main'>
      <CabecalhoInicial />
      <section className={styles.container}>
        <article className={styles.article}>
          <h1 className={styles.titulo}>
            Perfis <span>personalizados</span> para aqueles que são cinéfilos de carteirinha
          </h1>
          <p className={styles.descricao}>
            Crie o seu próprio perfil, gerencie seus filmes, séries e animes
            favoritos, expresse sua opinião e, acima de tudo, divirta-se!
          </p>
          <Botao onClick={() => navigate("/login")}>Começar agora</Botao>
        </article>
        <div className={styles.imagem}>
          <img
            src={Cineboy}
            alt="Garoto surpreso, segurando refrigerante e balde de pipoca."
          />
        </div>
      </section>
      <Rodape />
    </main>
  );
}