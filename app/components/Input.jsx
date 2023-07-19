import '../styles/modal.css';

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
        <label htmlFor={htmlFor} className='login-signup-label'>
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
