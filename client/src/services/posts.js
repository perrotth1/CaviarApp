import { api } from "./myfetch.js";


export function GetAll() {
    return api('posts');
}

export function GetWall(a_user) {
    return api('posts/wall/' + a_user);
}

export function GetFeed(handle) { 
    return api('posts/feed/' + handle);
}

export function Get(post_id) { 
    return api('posts/' + post_id); 
}

export function Add(post) {
    return api('posts/', post);
}

export function Delete(post_id) {
    console.log("In posts service delete id is:" + post_id)
    return api('posts/' + post_id, {}, 'DELETE');
} 

export function LikePost(a_user, a_post_id) {
    return api('posts/likepost', { a_user, a_post_id });
}

export function UnlikePost(a_user, a_post_id) {
    return api('posts/unlikepost', { a_user, a_post_id });
}