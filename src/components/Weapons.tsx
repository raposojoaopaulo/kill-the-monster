import React from 'react'
import { useState } from 'react';

type WarriorProps = {
  atackDamage: number;
}

function Weapons( { atackDamage }: WarriorProps) {


  return (
    <div className="weapons">
      <h3>Your atack damage is: {atackDamage}</h3>
    </div>
  )
}

export default Weapons