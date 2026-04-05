import character from './data/characterData'
import CharacterHeader from './components/CharacterHeader'
import StatsPanel from './components/StatsPanel'
import GearList from './components/GearList'
import './App.css'


function App(){
  return (
  <div className="dashboard">
    <CharacterHeader
      name={character.name}
      level={character.level}
      race={character.race}
      className={character.className}
    />
    <div className="grid">
    <StatsPanel stats={character.stats}/>
    <GearList gear={character.gear}/>
    </div>
  </div>
  )
}

export default App  