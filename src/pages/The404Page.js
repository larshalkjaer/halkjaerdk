import React from "react";
import images from '../data/images.js';
import styles from '../styles/The404Page.module.css';

export default function The404Page() {
    return (
        <div className={styles.outer}>
            <img className={styles.image} src={images.dog_slippers} />
            <p className={styles.title}>Vi kunne ikke finde siden...</p>
        </div>
    );
}

