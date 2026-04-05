function CharacterHeader({name, level, race, className}){
    return (
        <div>
            <h1>{name}</h1>
            <p>Level {level} {race} {className}</p>
        </div>
    )
}

export default CharacterHeader