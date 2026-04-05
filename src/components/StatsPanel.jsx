function StatBar({ label, current ,max, color}) {
    const percent = (current / max) * 100

    return (
        <div>
            <span>{label}: {current}/{max}</span>
            <div style={{background: '#333', height: 12, borderRadius: 6}}>
                <div style={{
                    width: percent + '%',
                    background: color,
                    height: '100%',
                    borderRadius: 6
                }}/>
            </div>
        </div>
    )
}

function StatsPanel ({ stats}) {
    return (
        <div>
            <h2>Stats</h2>
            <StatBar label="HP" current={stats.hp.current} max={stats.hp.max} color="#c41e3a"/>
            <StatBar label="Mana" current={stats.mana.current} max={stats.mana.max} color="#0079dd"/>
        </div>
    )
}

export default StatsPanel