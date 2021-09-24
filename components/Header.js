import Image from "next/image";
import styles from "../styles/Header.module.css";
import { menus_1, menus_2 } from "../pages/data";

const HeaderButton = ({ svg, title, url }) => {
  return (
    <div className={styles.rootButton}>
      <div className={styles.imageButton}>
        <Image
          src={svg}
          alt="test"
          layout="fill"
          objectFit="contain"
          quality="100"
        />
      </div>
      <p className={styles.titleButton}>
        {title}
      </p>
    </div>
  )
}

const Header = () => {
  return (
    <div className={styles.root}>
      <ul>
        {menus_1.map(({ id, svg, title, url }) => {
          return (
            <li key={id}>
              <HeaderButton svg={svg} title={title} url={url} />
            </li>
          );
        })}
      </ul>

      <Image
        src="https://static.ankama.com/ankama/www/modules/assets/logo.png"
        alt="test"
        layout="fill"
        objectFit="scale-down"
        quality="100"
      />

      <ul>
        {menus_2.map(({ id, svg, title, url }) => {
          return (
            <li key={id}>
              <HeaderButton svg={svg} title={title} url={url} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Header;
