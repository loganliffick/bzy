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
        <Button
          link
          href={'/#features'}
          ariaLabel="Navigate to the Features section"
        >
          Features
        </Button>
        <Button
          link
          href={'/#useCases'}
          ariaLabel="Navigate to the Use cases section"
        >
          Use Cases
        </Button>
        <Button
          onClick={() => {
            console.log('click');
          }}
          ariaLabel="Join the waitlist"
        >
          Join the waitlist
        </Button>
      </nav>
    </div>
  </header>
);

export default Navigation;
