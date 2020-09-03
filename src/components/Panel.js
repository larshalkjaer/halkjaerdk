import React from "react";
import styles from '../styles/Panel.module.css';
import images from '../data/images.js';

export default function Panel(props) {
    return (
      <div className={styles.outer}>
          <img className={styles.image} src={images[props.image]} />
          <p className={styles.title}>{props.title}</p>
      </div>
    );
}
