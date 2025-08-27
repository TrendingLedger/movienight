import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const Card = ({ title }) => {

  //this one in tutorial has initialState: false
  //it might be using a different style or format
  //could be using typeScript? will review
  // TODO: review the Type Script looking codes to see
  const [hasLiked, setHasLiked] = useState( false);

  const [count, setCount] = useState(0);

  //if [] then will run once when component mounts
  useEffect(() => {
    console.log(`${title} has been ${hasLiked}`)
  }, [hasLiked])

  return ( 
    //you don't want to directly access the state itself but use the previous state to increase the count
    // Bad: Might miss updates
/*     const handleClick = () => {
      setCount(count + 1);  // Uses potentially stale 'count'
      setCount(count + 1);  // Still uses same stale 'count'
    }

    // Good: Guarantees sequential updates
    const handleClick = () => {
      setCount(prevState => prevState + 1);  // First update
      setCount(prevState => prevState + 1);  // Second update
    } */
    <div className="card" onClick = {() => setCount((prevState) => prevState + 1)} >
      <h2>{title} <br /> { count || null }</h2>

      <button onClick={ () => setHasLiked(!hasLiked)  } >
        { hasLiked ? '❤️' : '🤍' }
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
