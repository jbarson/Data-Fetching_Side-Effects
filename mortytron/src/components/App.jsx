import { useState } from 'react'
import './App.css'
import ListOfCharacters from './ListOfCharacters'
import Counter from './Counter'

function App() {
  const [saying, setSaying] = useState("where are they from?")
  // const anotherFunction = () => {
  //   const [saying, setSaying] = useState("where are they from?")
  // }
  return (
    <div className="App App-header">
      <h1>MortyTron 3000</h1>
      <Counter />
      <p>{saying}</p>
      <ListOfCharacters setSaying={setSaying} />
    </div>
  )
}

export default App;
