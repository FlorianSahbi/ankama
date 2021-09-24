/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.root}>
      <div className={styles.logo}>
        <Image
          src="https://static.ankama.com/ankama/www/modules/assets/logo.png"
          alt="test"
          layout='fill'
          objectFit='contain'
          quality='100'
        />
      </div>
      <p className={styles.text}>2021 Ankama. Tous droits réservés. Conditions d'utilisation - Politique de confidentialité - Conditions Générales de Vente - Mentions Légales - Gestion des cookies</p>
    </div >
  )
}

export default Footer
