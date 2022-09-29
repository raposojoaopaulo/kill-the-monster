import React from 'react';
import styles from './Monster.module.css';

type MonsterProps = {
  health: number;
  defense: number;
}

function monster( { health, defense }: MonsterProps) {

  return (
    <div>
      <div className="monster-image">
        <img src="https://source.unsplash.com/1920x1080/?monster" alt='monster'/>
        <h2>
        {health && health > 0 ? <span className={styles.span}>❤️{Math.floor(health)} | 🛡️{defense}%</span> : <span className={styles.span}>💀</span>}
        </h2>
      </div>
    </div>
  )
}

export default monster