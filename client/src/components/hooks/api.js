import { HEROKU_LINK } from './config';
import queryString from 'query-string';

export function get(path, queryParams) {
  const query = queryString.stringify(queryParams);
  return fetch(`${HEROKU_LINK}${path}?${query}`);
}
