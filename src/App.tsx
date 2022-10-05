import React  from 'react';
import './App.css';
import { useState, useMemo } from 'react';
import Monster from './components/Monster';
import Weapons from './components/Weapons';


function App() {

  const [lifeMonster, setLifeMonster] = useState(Math.floor(Math.random() * 100) + 1);
  const [defenseMonster, setDefenseMonster] = useState(Math.floor(Math.random() * 20) + 31);
  const [atackDamage, setAtackDamage] = useState(Math.floor(Math.random() * 6) + 1);

  const damageContainer = document.querySelector('#damage');


  const damageReduction = useMemo(() => {
    return defenseMonster * atackDamage / 100;
  }, [defenseMonster, atackDamage]);
  

  const clickAtack = () => {  
    damageContainer?.classList.remove('App-hide');  
    let damage = atackDamage - damageReduction;
    setLifeMonster(lifeMonster - damage);
    console.log(damageReduction);
    console.log(damage);    
  };

  return (
    <div className="App">
      <header className="App-header">
        <Monster health={lifeMonster} defense={defenseMonster} />
        <br />
        <div>
          
        {lifeMonster >= 0 ? <Weapons atackDamage={atackDamage} /> : <h1>You win!</h1>}
        </div>
        <button onClick={clickAtack}>Atack</button>
        <br />
        <div id="damage" className="App-hide">
          You did {Math.floor(atackDamage - damageReduction)} damage!
        </div>
      </header>
    </div>
  );
}

export default App;
