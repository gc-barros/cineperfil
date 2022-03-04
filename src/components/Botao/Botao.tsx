import styles from "./Botao.module.scss";
import classNames from 'classnames';

interface Props {
  children: string;
  tipo?: "primario" | "secundario" | "ghost";
  onClick?: () => void;
}

export default function Botao({children, tipo, onClick}: Props) {
  return (
    <button onClick={onClick} className={classNames({
      [styles.botao]: true,
      [styles[`botao__${tipo}`]]: Boolean(tipo),
    })}>{children}</button>
  )
}
