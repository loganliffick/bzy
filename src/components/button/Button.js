import styles from './button.module.scss';
import Link from 'next/link';

const Button = ({ onClick, href, target, children }) => {
  if (onClick) {
    return (
      <button className={styles.button} onClick={onClick}>
        {children}
      </button>
    );
  } else {
    return (
      <Link
        className={styles.button}
        href={href}
        target={target}
        rel="noopener noreferrer"
      >
        {children}
      </Link>
    );
  }
};

export default Button;
