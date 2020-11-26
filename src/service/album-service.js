import axios from "axios";

export const loadAlbums = () => {
    return axios.get("https://jsonplaceholder.typicode.com/albums").then(response => response.data)
}
