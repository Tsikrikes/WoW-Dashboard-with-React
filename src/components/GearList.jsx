import styles from './GearList.module.css'

function GearSlot({ slot, name, ilvl }){
    return(
        <div className={styles.gearSlot}>
            <span className={styles.slotName}>{slot}: </span>
            <span className={styles.itemName}>{name}</span>
            <span className={styles.ilvl}>(ilvl {ilvl})</span>
        </div>
    )
}

function GearList({ gear }){
    return (
        <div className={styles.panel}>
            <h2 className={styles.title}>Gear</h2>
            {gear.map((item) => 
            (<GearSlot
                key={item.slot}
                slot={item.slot}
                name={item.name}
                ilvl={item.ilvl}
                />
            ))}
        </div>
    )
}

export default GearList