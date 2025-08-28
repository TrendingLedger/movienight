import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Search from './components/Search.jsx';


const App = () => {
  //passing as prop could end up with prop drilling so double check later
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <main>
      <div className="pattern" />

      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner" />

          <h1 className="text-3xl font-bold">
            <span className="text-gradient">Movies</span> to Watch When Boredom Happens
          </h1>
        </header>


        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      </div>

    </main>
  )

}

export default App
