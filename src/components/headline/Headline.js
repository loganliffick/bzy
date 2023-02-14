import styles from './headline.module.scss';

const Headline = ({ children }) => (
  <header className={styles.wrapper}>{children}</header>
);

export default Headline;
