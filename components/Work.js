import Image from "next/image";
import styles from "../styles/Work.module.css";

const WorkInfo = ({ title, color, description, buttonColor }) => {
  return (
    <div className={styles.workInfoRoot}>
      <div className={styles.rootTitle}>
        <h3 className={styles.title}>
          {title}
        </h3>
        <hr className={styles.separator} />
      </div>
      <p className={styles.description}>
        {description}
      </p>
      <div className={styles.buttonWrapper}>
        <button
          type="button"
          style={{ color: buttonColor, background: color }}
          className={styles.button}>
          Visiter le site
        </button>
      </div>
    </div>
  )
}

const Work = ({ color, img, title, description, ctaOnly, buttonColor }) => {

  if (ctaOnly) {
    return (
      <div className={styles.root} style={{ borderTop: `6px solid ${color}` }}>
        <Image
          src={img}
          alt="test"
          layout='fill'
          objectFit='cover'
          quality='100'
        />
        <button
          type="button"
          className={styles.callToAction}
          style={{ color: buttonColor, background: color }}
        >
          Visiter le site
        </button>
      </div >
    )
  }

  return (
    <div className={styles.root_2} style={{ borderTop: `6px solid ${color}` }}>
      <Image
        src={img}
        alt="test"
        layout='fill'
        objectFit='cover'
        quality='100'
      />
      <WorkInfo
        title={title}
        description={description}
        color={color}
        buttonColor={buttonColor}
      />
    </div>
  )
}

export default Work;
