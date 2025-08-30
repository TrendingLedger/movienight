import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { mockMovies } from './mockData';

import Search from './components/Search.jsx';

// API - application programming interface that allows 
// applications to "talk" with each other
const API_BASE_URL = 'https://some.api.okay';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}

const App = () => {
  //passing as prop could end up with prop drilling so double check later
  const [searchTerm, setSearchTerm] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const [movieList, setMovieList] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async () => {
    setIsLoading(true);

    setErrorMessage('');

    try {

      const endpoint = `${API_BASE_URL}etc`;

/* The Movie DB API Key not yet available so generating mock data
 hopefully, will get the API Key soon
*/
      //const response = await fetch(endpoint, API_OPTIONS);

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Use mock data instead of API call
      const data = mockMovies;

      /* if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }

      if (data.Response === false) {
        setErrorMessage(data.Error || 'Failed to fetch movies');
        setMovieList([]);
        return;
      } */

      setMovieList(data.results || []);


    } catch (error) {

      console.log(`Error fetching movies: ${error}`);
      setErrorMessage(`sorry error: ${error}`);

    } finally {
      setIsLoading(false);
    }

  }

  useEffect( 
    () => {

      fetchMovies();

    }, []
  );

  return (
    <main>
      <div className="pattern" />

      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner" />

          <h1 className="text-3xl font-bold">
            <span className="text-gradient">Movies</span> to Watch
          </h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <h1 className="text-white">{searchTerm}</h1>
        </header>

        <section className="all-movies">
          <h2>All Movies</h2>

          {isLoading ? (<p className='text-white'>Loading...</p>)

          :
          
          errorMessage ? 
            (<p className="text-red-500">{errorMessage}</p>) 
            
            : (
              <ul>
                {
                  movieList.map((movie) =>
                  (
                    <p>{movie.title}</p>


                  )
                  )

                }

              </ul>
            )

          }


     

        </section>

        
      </div>

    </main>
  )

}

export default App
