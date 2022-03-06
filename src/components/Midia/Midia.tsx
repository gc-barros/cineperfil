import styles from './Midia.module.scss';

export default function Midia() {
  return (
    <div className={styles.container}>
      <img
        src="https://upload.wikimedia.org/wikipedia/pt/thumb/0/00/Spider-Man_No_Way_Home_poster.jpg/250px-Spider-Man_No_Way_Home_poster.jpg"
        alt="Capa"
      />
    </div>
  );
}