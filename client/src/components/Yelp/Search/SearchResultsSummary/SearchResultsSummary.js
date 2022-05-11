import React from 'react';
import styles from './SearchResultsSummary.module.css';

export function SearchResultsSummary(props) {
    let resultStats = null;

    return (
        <div className={styles.container}>
            <div className={styles['search-summary']}>
            <p>Displaying results for: </p>
                <h1 className='subtitle'><strong>{props.term}</strong> in {props.location}</h1>
                {resultStats}
            </div>
        </div>
    );
}