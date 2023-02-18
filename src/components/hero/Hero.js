import Card from '../cards/Card';
import styles from './hero.module.scss';

const Hero = ({ children }) => (
  <section className={styles.wrapper}>
    <div>
      <div className={styles.content}>{children}</div>
      <div className={styles.cardContainer}>
        <Card id={styles.card} />
      </div>
    </div>
  </section>
);

export default Hero;
