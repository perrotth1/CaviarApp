import { api } from "./myfetch";


export function GetAll() {
    return api('posts');
}

export function GetWall(handle) {
    return api('posts/wall/' + handle);
}

export function GetFeed(handle) { 
    return api('posts/feed/' + handle);
}

export function Get(post_id) { 
    return api('posts/' + post_id); 
}

export function Add(post) {
    return api('posts/add/', post);
}

export function Delete(post_id) {
    console.log("In posts service delete id is:" + post_id)
    return api('posts/' + post_id, {}, 'DELETE');
} 