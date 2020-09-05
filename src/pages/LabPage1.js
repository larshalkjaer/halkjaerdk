import React from 'react';
import WeatherChart from '../components/WeatherChart.js';
import styles from '../styles/LabPage.module.css';

export default function LabPage1() {
    return (
        <div className={styles.outer}>
            <p className={styles.title}>Fetch & C3.js</p>
            <p className={styles.text}>Henter temperaturdata for de kommende dage i Køge asynkront (async/wait) med fetch() fra yr.no.<br/>Viser data med C3.js.</p>
            <WeatherChart styles={styles.chart}/>
        </div>
    );
}

