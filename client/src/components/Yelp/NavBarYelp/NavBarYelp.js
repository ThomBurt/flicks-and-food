import React from 'react';
import styles from './NavBarYelp.module.css';
import { SearchBar } from '../SearchBar/SearchBar';

export function NavBarYelp(props) {
    return (
        <div className={styles['nav-bar']}>
            <SearchBar small term={props.term} location={props.location} search={props.search}/>
        </div>
    );
}