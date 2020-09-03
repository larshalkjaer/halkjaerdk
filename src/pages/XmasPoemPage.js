import React from "react";
import Header from '../components/Header';
import Panel from '../components/Panel';
import Poem from '../components/Poem';
import styles from '../styles/XmasPoemPage.module.css';
import poems from '../data/poems.json';
import xmasMenuItems from '../data/xmas-menu-items.json';

export default function XmasPoemPage(props) {
  const year = props.match.params.year;

  function getPoemVerses(year)
  {
    return poems[year] || [];
  }

  function getPanelTitle(year)
  {
    const menuitem = xmasMenuItems.find(menuitem => menuitem.id === year);
    return (menuitem && menuitem.title) || '';
  }

  function getPanelImage(year)
  {
    const menuitem = xmasMenuItems.find(menuitem => menuitem.id === year);
    return (menuitem && menuitem.image) || '';
  }

  return (
    <div className={styles.outer}>
      <Panel title={getPanelTitle(year)} image={getPanelImage(year)} />
      <Poem verses={getPoemVerses(year)}/>
    </div>
  );
}
