import styles from './section.module.scss';

const Section = ({ style, id, padTop, padBtm, width, children }) => (
  <section
    className={styles.wrapper + `${style ? ` ${style}` : ''}`}
    id={id}
    style={{
      paddingTop: `${padTop || null}`,
      paddingBottom: `${padBtm || null}`,
    }}
  >
    <div className={styles[width || 'reg']}>{children}</div>
  </section>
);

export default Section;
