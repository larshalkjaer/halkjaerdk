import React from "react";
import BoxMenu from '../components/BoxMenu';
import styles from '../styles/MainPage.module.css';
import itemStyles from '../styles/MainMenuItem.module.css';
import mainMenuItems from '../data/main-menu-items.json';

export default function MainPage() {
    return (
      <div className={styles.outer}>
        <BoxMenu items={mainMenuItems} itemStyles={itemStyles} />
      </div>
    );
}

