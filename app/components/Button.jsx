import '../styles/buttons.css';
import Link from 'next/link';

const Button = ({ text, className, link, href, onClick }) => {
  return link ? (
    <Link href={href} className={className}>
      {text}
    </Link>
  ) : (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
