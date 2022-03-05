import fotoUsuario from 'assets/img/dogcinema.jpg';
import { useNavigate } from 'react-router-dom';
import styles from './ExibirPerfil.module.scss';

export default function ExibirPerfil() {

  let navigate = useNavigate();

  return (
    <div className={styles.container} onClick={() => navigate("/perfil")}>
      <div className={styles.foto}>
        <img src={fotoUsuario} alt="Foto do usuário" />
      </div>
      <h2 className={styles.nome}>Gabriel Barros</h2>
      <p className={styles.sobre}>
        Fã de filmes de ficção científica e animações.
      </p>
    </div>
  );
}