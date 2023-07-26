import React, { useEffect, useState } from 'react'

// Resource
import axios from '../../Resource/axios/axios';
import requests from '../../Resource/requests/requests';

function Banner() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(requests.fetchNetflixOriginals);
            setMovies(response?.data.results [
                Math.floor(Math.random() * response.data.results.length)
            ]);
            return response;
          }
        fetchData();
      } , []);

      function truncate(string , number) {
          return string?.length > number ? string.substr(0 , number - 1) + "..." : string;
      }

  return (
    <section
      className='Banner'
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
        backgroundPosition: "center",
      }}
    >
      <div className="banner_display">
        <h1 className='banner_title'>
          {movies?.title || movies?.name || movies?.originals_name}
        </h1>
        <div className='banner_buttons'>
            <button className='banner_button'>Play</button>
            <button className='banner_button'>My List</button>
        </div>
        <div className='banner_description'>{truncate(movies?.overview , 150)}</div>
      </div>
      <div className='banner_fade_bottom'/>
    </section>
  )
}

export default Banner;