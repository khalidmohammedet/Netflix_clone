import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "4116d4d432bf06415eeea2bf37d607c6"
  }
});

// instance.get("/movie/top_rated");

export default instance;