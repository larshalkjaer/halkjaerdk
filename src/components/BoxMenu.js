import React from "react";
import BoxMenuItem from './BoxMenuItem';
import styles from '../styles/BoxMenu.module.css';
import images from '../data/images.js';

export default function BoxMenu(props) {
  function renderItems(items)
  {
    return items.map(item => 
      <BoxMenuItem key={item.id} title={item.title} img={images[item.image]} link={item.link} styles={props.itemStyles} />
    )
  }

  return (
    <div className={styles.outer}>
      {renderItems(props.items)}
    </div>
  );
}
