import axios from "axios";

export function userApi(){
    return  axios.get("https://jsonplaceholder.typicode.com/users");
}