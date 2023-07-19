import styles from './page.module.css';

const Input = ({
  placeholder,
  name,
  value,
  htmlFor,
  type,
  label,
  className,
  handleInputChange,
}) => {
  return (
    <>
      {name !== 'habits' && (
        <label htmlFor={htmlFor} className={styles.label}>
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        className={className}
        onChange={handleInputChange}
      ></input>
    </>
  );
};

export default Input;
