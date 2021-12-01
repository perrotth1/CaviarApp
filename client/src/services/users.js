import { api } from "./myfetch.js";

export function GetAll() { return api('users/'); }
export function Get(user_id) { return  api('users/' + user_id); }
export function GetByHandle(handle) { return  api('users/byhandle/' + handle); } 

export function Search(a_term) {
    return api('users/search?q='+a_term);
}

export function Add(user) {
    return api('users/register', user);
}

export function Delete(user_id) {
    return api('users/' + user_id, {}, 'DELETE');
}

export function Login(handle, password){
    console.log("In users service logging in with: " + handle + ' ' + password);
    return api('users/login', { handle, password });
}

export function Follow(a_user, a_target_user) {
    return api('users/follow', { a_user, a_target_user });
}

export function Unfollow(a_user, a_target_user) {
    return api('users/unfollow', { a_user, a_target_user });
}