import React from "react";
import BoxMenu from '../components/BoxMenu';
import styles from '../styles/MainPage.module.css';
import itemStyles from '../styles/MainMenuItem.module.css';
import mainMenuItems from '../data/main-menu-items.json';
import sharedData from '../data/shared-data.js';

export default function MainPage() {
  adjustLinks(mainMenuItems);

  return (
    <div className={styles.outer}>
      <BoxMenu items={mainMenuItems} itemStyles={itemStyles} />
    </div>
  );
}

function adjustLinks(mainMenuItems)
{
  mainMenuItems.forEach(item => {
    if (item.link.startsWith('http') && (sharedData.showmode.length > 0))
    {
      item.link += `/?show=${sharedData.showmode}`;
    }
  });
}