import styles from './button.module.scss';
import Link from 'next/link';

const Button = ({ onClick, href, target, children, link, ariaLabel }) => {
  if (onClick) {
    return (
      <button
        className={link ? styles.link : styles.button}
        onClick={onClick}
        aria-label={ariaLabel}
      >
        {children}
      </button>
    );
  } else {
    return (
      <Link
        className={link ? styles.link : styles.button}
        href={href}
        target={target ? '_blank' : null}
        rel={target ? 'noopener noreferrer' : null}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    );
  }
};

export default Button;
