function GearSlot({ slot, name, ilvl }){
    return(
        <div>
            <span>{slot}: </span>
            <span>{name}</span>
            <span>(ilvl {ilvl})</span>
        </div>
    )
}

function GearList({ gear }){
    return (
        <div>
            <h2>Gear</h2>
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