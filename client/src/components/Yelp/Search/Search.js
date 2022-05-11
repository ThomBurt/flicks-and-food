import React from 'react';
import { NavBarYelp } from '../NavBarYelp/NavBarYelp';
import { SearchResultsSummary } from './SearchResultsSummary/SearchResultsSummary';
import { SearchResults } from './SearchResults/SearchResults';
// import useReactRouter from 'use-react-router';
import { useHistory } from "react-router-dom"
import { useBusinessSearch } from '../../hooks/useBusinessSearch';

export function Search() {
  const { location, history } = useHistory();
  const params = new URLSearchParams(location.search);
  const term = params.get('find_desc');
  const locationParam = params.get('find_loc');
  const [businesses, amountResults, searchParams, performSearch] =
    useBusinessSearch(term, locationParam);

  if (!term || !locationParam) {
    history.push('/');
  }

  function search(term, location) {
    const encodedTerm = encodeURI(term);
    const encodedLocation = encodeURI(location);
    history.push(
      `/search?find_desc=${encodedTerm}&find_loc=${encodedLocation}`
    );
    performSearch({ term, location });
  }

  return (
    <div>
      <NavBarYelp term={term} location={locationParam} search={search} />
      <SearchResultsSummary
        term={searchParams.term}
        location={searchParams.location}
        amountResults={amountResults}
        shownResults={businesses ? businesses.length : 0}
      />
      <SearchResults businesses={businesses} />
    </div>
  );
}
