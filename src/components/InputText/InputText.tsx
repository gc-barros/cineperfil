import styles from './InputText.module.scss'

interface Props {
  label: string;
  type?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export default function InputText({label, type = "text", onChange}: Props) {
  return (
    <label className={styles.label}>
      {label}
      <input type={type} className={styles.input} onChange={onChange} />
    </label>
  );
}