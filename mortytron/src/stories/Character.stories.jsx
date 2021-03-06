import Character from '../components/Character'
import { storiesOf } from '@storybook/react'

const sampleCharacter = {
  "id": 18,
  "name": "Antenna Morty",
  "status": "Alive",
  "species": "Human",
  "type": "Human with antennae",
  "gender": "Male",
  "origin": {
    "name": "unknown",
    "url": ""
  },
  "location": {
    "name": "Citadel of Ricks",
    "url": "https://rickandmortyapi.com/api/location/3"
  },
  "image": "https://rickandmortyapi.com/api/character/avatar/18.jpeg",
  "episode": [
    "https://rickandmortyapi.com/api/episode/10",
    "https://rickandmortyapi.com/api/episode/28"
  ],
  "url": "https://rickandmortyapi.com/api/character/18",
  "created": "2017-11-04T22:25:29.008Z"
}

const setSaying = () => console.log('boom')

storiesOf("character component", module)
  .add("With proper props", () => <Character character={sampleCharacter} setSaying={setSaying} />)
