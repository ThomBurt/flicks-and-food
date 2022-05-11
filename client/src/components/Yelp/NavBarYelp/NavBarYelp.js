import React from 'react';
import styles from './NavBarYelp.module.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { DinnerText } from '../DinnerText.js/DinnerText';

export function NavBarYelp(props) {
    return (
        <div className={styles['nav-bar']}>
            <DinnerText />
            <SearchBar small term={props.term} location={props.location} search={props.search}/>
        </div>
    );
}