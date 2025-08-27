import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const Card = ({ title }) => {
  const [hasLiked, setHasLiked] = useState({ initialState: false});

  return ( 
    <div className="card">
      <h2>{title}</h2>

      <button onClick={ () => setHasLiked(true)  } >
        Like
      </button>
    </div>
  )

}

const App = () => {
  

  return (
    <div className="card-container" rating={5} isCool={true}>
      <Card title="Star Wars" />
      <Card title="Star Trek" />
      <Card title="Batman" />
    </div>
  )

}

export default App
