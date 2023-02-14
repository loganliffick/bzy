import styles from './navigation.module.scss';
import Link from 'next/link';

import Button from '../button/Button';
import Logo from '../logo/Logo';

const Navigation = () => (
  <header className={styles.wrapper}>
    <div>
      <Link
        href={'/'}
        className={styles.logo}
        aria-label="Navigate to the homepage"
      >
        <Logo stroke />
      </Link>
      <nav>
        <Link href={'#features'} aria-label="Navigate to the Features section">
          Features
        </Link>
        <Link href={'#useCases'} aria-label="Navigate to the Use cases section">
          Use Cases
        </Link>
        <Button
          onClick={() => {
            console.log('click');
          }}
        >
          Join the waitlist
        </Button>
      </nav>
    </div>
  </header>
);

export default Navigation;
