import { useState, useEffect } from 'react'
import axios from 'axios'
import Character from './Character'

// import data from '../data/data.json'
function ListOfCharacters({ setSaying }) {
  const [characters, setCharacters] = useState([])
  // const characters = useState()[0]
  // const setCharacters = useState()[1]
  // const characterNames = characters.map(character => character.name)
  // console.log(characterNames)


  useEffect(
    () => {
      axios.get('https://rickandmortyapi.com/api/character')
        .then(response => {
          setCharacters(response.data.results)
        })
    }, []
  )

  return (
    <ul>
      {characters.map((character, index) => <Character key={index} character={character} setSaying={setSaying}>{character.name}</Character>)}
    </ul>
  )
}

export default ListOfCharacters