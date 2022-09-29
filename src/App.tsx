import React  from 'react';
import './App.css';
import { useState, useMemo } from 'react';
import Monster from './components/Monster';
import Weapons from './components/Weapons';


function App() {

  const [lifeMonster, setLifeMonster] = useState(Math.floor(Math.random() * 100) + 1);
  const [defenseMonster, setDefenseMonster] = useState(Math.floor(Math.random() * 20) + 31);
  const [atackDamage, setAtackDamage] = useState(Math.floor(Math.random() * 6) + 1);

  const damageReduction = useMemo(() => {
    return defenseMonster * atackDamage / 100;
  }, [defenseMonster, atackDamage]);
  

  const clickAtack = () => {    
    setLifeMonster(lifeMonster - atackDamage + damageReduction);
    console.log(damageReduction);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Monster health={lifeMonster} defense={defenseMonster} />
        <br />
        {lifeMonster >= 0 ? <Weapons atackDamage={atackDamage} /> : <h1>You win!</h1>}
        <button onClick={clickAtack}>Atack</button>
      </header>
    </div>
  );
}

export default App;
