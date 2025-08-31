import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { mockMovies } from './mockData';

import Search from './components/Search.jsx';
import Spinner from './components/Spinner.jsx'  // Add this line
import MovieCard from './components/MovieCard.jsx'

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

  const fetchMovies = async (query = '') => {
    setIsLoading(true);

    setErrorMessage('');

    try {

      

      /* The Movie DB API Key not yet available so generating mock data
      hopefully, will get the API Key soon
      */

      //depends on query exist or not. the base url and search vs discover
      //this is if API was working there would be a bit more.
      //const endpoint = `${API_BASE_URL}etc`;

      //const response = await fetch(endpoint, API_OPTIONS);

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 100));
      
      // Use mock data instead of API call
      // Filter movies if query exists
      const data = query
        ? {
            results: mockMovies.results.filter(movie =>
              movie.title.toLowerCase().includes(query.toLowerCase())
            )
          }
        : mockMovies;

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

      fetchMovies(searchTerm);

    }, [searchTerm]
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
          <h2 className="mt-[40px]">All Movies</h2>

          {isLoading ? (<Spinner />)

          :
          
          errorMessage ? 
            (<p className="text-red-500">{errorMessage}</p>) 
            
            : (
              <ul>
                {
                  //you don't have to write return with () versus { }
                  //provide a key to make it unique
                  movieList.map((movie) =>
                  (
                    <MovieCard key={movie.id} movie={movie} />

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
