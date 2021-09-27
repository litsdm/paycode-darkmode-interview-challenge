import axios  from "axios";
// https://rickandmortyapi.com/api/character/5

const apiUrl = "https://rickandmortyapi.com/api";

const axiosClient = axios.create({ baseURL: apiUrl });

export default axiosClient;