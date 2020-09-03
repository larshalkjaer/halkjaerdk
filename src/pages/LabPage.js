import React from "react";
import BoxMenu from '../components/BoxMenu';
import itemStyles from '../styles/LabMenuItem.module.css';
import labMenuItems from '../data/lab-menu-items.json';

export default function XmasPage() {
    return (
      <div>
        <BoxMenu items={labMenuItems} itemStyles={itemStyles} />
      </div>
    );
}

