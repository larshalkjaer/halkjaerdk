import React, {useState, useEffect} from 'react';
import {useHistory, useLocation} from "react-router-dom";
import styles from '../styles/Header.module.css';
import images from '../data/images.js';

export default function Header(props) {
    const history = useHistory();
    const location = useLocation();
    const [showBackButton, setShowBackButton] = useState(false);
    
    useEffect(() => {
        setShowBackButton(history.location.pathname !== '/');
    }, [location]);
    
    function handleClickHome()
    {
        history.push('/');
    }
    
    function handleClickBack()
    {
        history.goBack();
    }

    function handleClickGithub()
    {
        window.open('https://github.com/larshalkjaer', '_blank');
    }
    
    return (
        <div className={styles.outer}>
            <span onClick={handleClickHome} className={styles.homebutton}>
            <span className={styles.title}>{props.title1}</span>
            <span className={`${styles.title} ${styles.part2color}`}>{props.title2}</span>
            </span>
            {showBackButton && <i onClick={handleClickBack} className={`material-icons ${styles.backbutton}`}>arrow_back</i>}
            <img onClick={handleClickGithub} className={styles.githublink} src={images.github} />
        </div>
    );
}
