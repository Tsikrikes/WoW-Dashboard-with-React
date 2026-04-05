import character from './data/characterData'
import CharacterHeader from './components/CharacterHeader'
import StatsPanel from './components/StatsPanel'


function App(){
  return (
  <div>
    <CharacterHeader
      name={character.name}
      level={character.level}
      race={character.race}
      className={character.className}
    />
      <StatsPanel stats={character.stats}/>
  </div>
  )
}

export default App