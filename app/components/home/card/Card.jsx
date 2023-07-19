import styles from './Card.module.css';
import Image from 'next/image';

const Card = ({
  card,
  title,
  blurb,
  img,
  alt,
  width,
  height,
  cardTitle,
  cardBlurb,
  titleColor,
}) => {
  return (
    <div className={card}>
      <Image src={img} alt={alt} width={width} height={height} />
      <div className={styles.text}>
        <span className={`${cardTitle} ${styles[titleColor]}`}>{title}</span>
        <span className={cardBlurb}>{blurb}</span>
      </div>
    </div>
  );
};

export default Card;
