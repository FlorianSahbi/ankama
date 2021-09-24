/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import styles from "../styles/News.module.css";

const NewsCard = ({ article, preview, avatar, name }) => {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Image
          src={preview}
          alt="test"
          layout='fill'
          objectFit='cover'
          quality='100'
        />
      </div>

      <div className={styles.middle}>
        <p className={styles.article}>
          {article}
        </p>
      </div>

      <div className={styles.footer}>
        <div className={styles.avatar}>
          <Image src={avatar}
            alt="test"
            layout='fill'
            objectFit='cover'
            quality='100'
          />
        </div>
        <p className={styles.name}>
          {name}
        </p>
      </div>
    </div >
  )
}

export default NewsCard;
