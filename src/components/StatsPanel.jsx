import styles from './StatsPanel.module.css'


function StatBar({ label, current ,max, color}) {
    const percent = (current / max) * 100

    return (
        <div className={styles.barContainer}>
            <span className={styles.barLabel}>{label}: {current}/{max}</span>
            <div className={styles.barTrack}>
                <div className={styles.barFill} style={{ width: percent + '%', background: color }}/>
            </div>
        </div>
    )
}

function StatItem ({ label, value }) {
    return <p className={styles.statItem}>{label}: {value}</p>
}

function StatsPanel ({ stats}) {
    return (
        <div className={styles.panel}>
            <h2 className={styles.title}>Stats</h2>
            <StatBar label="HP" current={stats.hp.current} max={stats.hp.max} color="#c41e3a"/>
            <StatBar label="Mana" current={stats.mana.current} max={stats.mana.max} color="#0079dd"/>
            <StatItem label="Strength" value={stats.strength} />
            <StatItem label="Agility" value={stats.agility} />
            <StatItem label="Intellect" value={stats.intellect} />
            <StatItem label="Stamina" value={stats.stamina} />
        </div>
    )
}

export default StatsPanel