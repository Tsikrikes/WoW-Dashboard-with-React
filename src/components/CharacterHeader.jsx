import styles from './CharacterHeader.module.css'

function CharacterHeader({name, level, race, className}){
    return (
        <div className={styles.header}>
            <h1 className={styles.name}>{name}</h1>
            <p className={styles.info}>Level {level} {race} {className}</p>
        </div>
    )
}

export default CharacterHeader