import styles from './footer.module.scss';

import Logo from '../logo/Logo';
import Link from 'next/link';

const Footer = () => (
  <footer className={styles.wrapper}>
    <div>
      <Logo />
      <nav>
        <Link href="/">Join the waitlist</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Terms</Link>
      </nav>
    </div>
  </footer>
);

export default Footer;
