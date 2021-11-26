import { api } from './myfetch.js';

export function Search (a_type, a_term) {
    api('items/'+a_type+'/search?q='+a_term);
}