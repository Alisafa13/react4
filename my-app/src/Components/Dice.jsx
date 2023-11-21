import React from 'react'
import { useState } from 'react'
import dice1 from './dice1.png'
import dice2 from './dice2.png'
import dice3 from './dice3.png'
import dice4 from './dice4.png'
import dice5 from './dice5.png'
import dice6 from './dice6.png'
import './Dice.css'
const Dice = () => {
    let arr = [dice1,dice2,dice3,dice4,dice5,dice6];
    const [firstDice, setDice] = useState( dice1 );
    const [secondDice, setDice2] = useState( dice1 );

    const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


    const rollDice = () => getRandomNumber(0, 5);

    const changeFirstDice = () => {
        setDice(arr[rollDice()])
    }
    const changeSecondDice = () => {
        setDice2(arr[rollDice()])
    }
    return (
        <div className='all'>
            <div className='dices'>
                <div>
                    <img className="img1" src={firstDice} alt="" onClick={changeFirstDice} />
                </div>
                <div>
                    <img className="img2" src={secondDice} alt="" onClick={changeSecondDice} />
                </div>
            </div>
        </div>
    )
}

export default Dice