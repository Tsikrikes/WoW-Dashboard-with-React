import character from './data/characterData'
import CharacterHeader from './components/CharacterHeader'
import StatsPanel from './components/StatsPanel'
import GearList from './components/GearList'



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
    <GearList gear={character.gear}/>
  </div>
  )
}

export default App  