import './Character.css'
function Character({ character, children, setSaying }) {
  const handleClick = () => setSaying(`${character.name} is from ${character.origin.name}`)
  return (
    <li>
      <h2>{children}</h2>
      <img src={character.image} alt={character.name} onClick={handleClick} />
    </li>
  )
}

export default Character