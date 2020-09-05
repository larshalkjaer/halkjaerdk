import React from 'react';
import TodoList from '../components/TodoList.js';
import styles from '../styles/LabPage.module.css';

export default function LabPage2() {
    return (
        <div className={styles.outer}>
            <p className={styles.title}>ToDo-liste med MERN Stack</p>
            <p className={styles.text}>{'Klassisk ToDo-liste.\nMongoDB på en DigitalOcean Ubuntu droplet og server app bygget med Express and Mongoose.\nClient henter data med Fetch.\nPrøv endelig (med lad gerne en enkelt eller to ToDos tilbage)'}</p>
            <TodoList />
        </div>
    );
}
