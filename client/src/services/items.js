import { api } from './myfetch.js';

export function Search (a_type, a_term) {
    console.log("Search serviced called. Type: "+a_type+" term: "+a_term);
    return api('items/'+a_type+'/search?q='+a_term);
}