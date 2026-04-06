import { useState } from 'react'
import styles from './GearList.module.css'

function GearSlot({ slot, name, ilvl }){
    const [hovered, setHovered] = useState(false)
    
    return(
        <div 
            className={styles.gearSlot}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <span className={styles.slotName}>{slot}: </span>
            <span className={styles.itemName}>{name}</span>
            <span className={styles.ilvl}>(ilvl {ilvl})</span>
            {hovered && (
                <div className={styles.tooltip}>
                    <p>{name}</p>
                    <p>Item Level: {ilvl}</p>
                    <p>Slot: {slot}</p>
                </div>
            )}
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