import React from "react";
import styles from '../styles/Poem.module.css';

export default function Poem(props) {
    function renderVerses(verses)
    {
        let idx = 0;
        return verses.map(verse => 
            <p key={idx++} className={styles.verse}>
                {verse.split('|').map(line =>
                    <span key={line} className={styles.line}>{line}<br/></span>
                )}
            </p>
        )
    }

    return (
      <div className={styles.outer}>
          {renderVerses(props.verses)}
      </div>
    );
}
