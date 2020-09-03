import React from "react";
import BoxMenu from '../components/BoxMenu';
import itemStyles from '../styles/XmasMenuItem.module.css';
import xmasMenuItems from '../data/xmas-menu-items.json';

export default function XmasPage() {
    return (
      <div>
        <BoxMenu items={xmasMenuItems} itemStyles={itemStyles} />
      </div>
    );
}

