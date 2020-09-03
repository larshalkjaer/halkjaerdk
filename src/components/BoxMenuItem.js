import React from "react";
import styles from '../styles/BoxMenuItem.module.css';
import {useHistory} from "react-router-dom";

export default function BoxMenuItem(props) {
    const outerClasses = `${styles.outer} ${props.styles.outer || ''}`;
    const imageClasses = `${styles.image} ${props.styles.image || ''}`;
    const titleClasses = `${styles.title} ${props.styles.title || ''}`;
    const history = useHistory();

    function handleClick()
    {
      if (props.link.startsWith('http'))
      {
        window.location.assign(props.link);
      }
      else
      {
        history.push(props.link);
      }
    }

    return (
      <div className={outerClasses} onClick={handleClick}>
        <img className={imageClasses} src={props.img} />
        <p className={titleClasses}>{props.title}</p>
      </div>
    );
}
