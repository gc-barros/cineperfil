import styles from "./Input.module.scss";
import eyeVisible from "assets/img/visible.svg";
import eyeInvisible from "assets/img/invisible.svg";
import { useState } from "react";

interface Props {
  label: string;
  type?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  showIcon?: boolean;
}

export default function Input({
  label,
  type = "text",
  onChange,
  showIcon = false,
}: Props) {
  
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [tipoSenha, setTipoSenha] = useState(type);

  function toggleSenhaVisivel() {
    setSenhaVisivel(!senhaVisivel);
    tipoSenha === "password" ? setTipoSenha("text") : setTipoSenha("password");
  }

  return (
    <label className={styles.label}>
      {label}
      <input
        type={tipoSenha}
        className={styles.input}
        onChange={onChange}
        required
      />
      {showIcon && (
        <div className={styles.inputIcon}>
          <img
            src={!senhaVisivel ? eyeInvisible : eyeVisible}
            alt="Alterar visiblidade da senha"
            title="Alterar visiblidade da senha"
            onClick={toggleSenhaVisivel}
          />
        </div>
      )}
    </label>
  );
}
