import { IMidia } from 'types/midia';
import styles from './Midia.module.scss';

interface Props {
  midia: IMidia;
}

export default function Midia({midia}: Props) {
  return (
    <div className={styles.container}>
      <img
        src={midia.url}
        alt={`Capa de ${midia.nome}`}
      />
    </div>
  );
}