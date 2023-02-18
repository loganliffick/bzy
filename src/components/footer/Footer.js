import styles from './footer.module.scss';

import Logo from '../logo/Logo';
import Link from 'next/link';
import Button from '../button/Button';

const Footer = () => (
  <footer className={styles.wrapper}>
    <div>
      <div className={styles.divider} />
      <Link href="/" aria-label="Go to top of page">
        <Logo />
      </Link>
      <nav>
        <Button
          link
          onClick={() => {
            console.log('click');
          }}
        >
          Join the waitlist
        </Button>
        <Button link target href="mailto:info@bzy.so">
          Get in touch
        </Button>
        <Button link href="/terms">
          Terms
        </Button>
      </nav>
    </div>
  </footer>
);

export default Footer;
