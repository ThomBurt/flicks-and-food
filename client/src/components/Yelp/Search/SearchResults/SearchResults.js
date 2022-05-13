import React from 'react';
import { SearchResult } from './SearchResult/SearchResult';
import styles from './SearchResults.module.css';
import {Spinner} from '../../Spinner/Spinner';

export function SearchResults(props) {
    let searchResults = null;
    if(props.businesses && props.businesses.length) {
        searchResults = props.businesses.map(b => <SearchResult key={b.id} business={b}/>);
    }

    return (
        <div className={styles['search-results']}>
            {props.loading?<Spinner/>: searchResults}
        </div>
    );
}