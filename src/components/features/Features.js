import styles from './features.module.scss';

import Card from '../cards/Card';

const Tile = ({ type, title, description, children }) => (
  <div className={styles.tile + ' ' + styles[type]}>
    <header>
      <h3 className="title_small">{title}</h3>
      <p>{description}</p>
    </header>
    {children}
  </div>
);

const Features = () => (
  <div className={styles.grid}>
    <Tile
      type="create"
      title="Express yourself"
      description="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla."
    >
      <div className={styles.marquee}>
        <ul>
          <li>
            <Card />
          </li>
          <li>
            <Card />
          </li>
          <li>
            <Card />
          </li>
          <li>
            <Card />
          </li>
        </ul>
        <ul aria-hidden="true">
          <li>
            <Card />
          </li>
          <li>
            <Card />
          </li>
          <li>
            <Card />
          </li>
          <li>
            <Card />
          </li>
        </ul>
      </div>
    </Tile>
    <Tile
      type="profile"
      title="Express yourself"
      description="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla."
    ></Tile>
    <Tile
      type="collect"
      title="Express yourself"
      description="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla."
    ></Tile>
    <Tile
      type="wallet"
      title="Express yourself"
      description="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla."
    ></Tile>
  </div>
);

export default Features;
