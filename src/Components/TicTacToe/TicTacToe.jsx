import React, { useRef, useState } from 'react'
import './TicTacToe.css'
import circle_icon from '../Assets/circle.png'
import cross_icon from '../Assets/cross.png'

let input = ["","","","","","","","",""];

const TicTacToe = () => {


    let [count, setCount] = useState(0);
    let [lock, setLock] = useState(false);
    let titleRef = useRef(null);
    let box1 = useRef(null);
    let box2 = useRef(null);
    let box3 = useRef(null);
    let box4 = useRef(null);
    let box5 = useRef(null);
    let box6 = useRef(null);
    let box7 = useRef(null);
    let box8 = useRef(null);
    let box9 = useRef(null);

    let box_array = [box1,box2,box3,box4,box5,box6,box7,box8,box9];

    const toggle = (e, num) => {
        if (lock) {
            return 0;
        }

        if(count%2 === 0) {
            e.target.innerHTML = `<img src='${cross_icon}'>`;
            input[num] = "x";
            setCount(++count);
        } else {
            e.target.innerHTML = `<img src='${circle_icon}'>`;
            input[num] = "o";
            setCount(++count);
        }
        checkWin();
    }

    const checkWin = () => {
        if(input[0]===input[1] && input[1]===input[2] && input[2]!=="") {
            won(input[2]);
        } else if (input[3]===input[4] && input[4]===input[5] && input[5]!=="") {
            won(input[5]);
        } else if (input[6]===input[7] && input[7]===input[8] && input[8]!=="") {
            won(input[8])
        } else if (input[0]===input[3] && input[3]===input[6] && input[6]!=="") {
            won(input[6])
        } else if (input[1]===input[4] && input[4]===input[7] && input[7]!=="") {
            won(input[7]);
        } else if (input[2]===input[5] && input[5]===input[8] && input[8]!=="") {
            won(input[8]);
        } else if (input[0]===input[4] && input[4]===input[8] && input[8]!=="") {
            won(input[8]);
        } else if (input[0]===input[1] && input[1]===input[2] && input[2]!=="") {
            won(input[2]);
        } else if (input[2]===input[4] && input[4]===input[6] && input[6]!=="") {
            won(input[6]);
        }
    }

    const won = (winner) => {
        setLock(true);
        if(winner==="x") {
            titleRef.current.innerHTML = `Congratulations: <img src=${cross_icon}> Wins`;
        } else {
            titleRef.current.innerHTML = `Congratulations: <img src=${circle_icon}> Wins`;
        }
    }

    const reset = () => {
        setLock(false);
        input = ["","","","","","","","",""];
        titleRef.current.innerHTML = 'Tic Tac Toe';
        box_array.map((e) => {
            return e.current.innerHTML = "";
        })
    }

  return (
    <div className='container'>
        <h1 className="title" ref={titleRef}>Tic Tac Toe</h1>
        <div className="board">
            <div className="row1">
                <div className="boxes" ref={box1} onClick={(e)=>{toggle(e,0)}}></div>
                <div className="boxes" ref={box2} onClick={(e)=>{toggle(e,1)}}></div>
                <div className="boxes" ref={box3} onClick={(e)=>{toggle(e,2)}}></div>
            </div>
            <div className="row2">
                <div className="boxes" ref={box4} onClick={(e)=>{toggle(e,3)}}></div>
                <div className="boxes" ref={box5} onClick={(e)=>{toggle(e,4)}}></div>
                <div className="boxes" ref={box6} onClick={(e)=>{toggle(e,5)}}></div>
            </div>
            <div className="row3">
                <div className="boxes" ref={box7} onClick={(e)=>{toggle(e,6)}}></div>
                <div className="boxes" ref={box8} onClick={(e)=>{toggle(e,7)}}></div>
                <div className="boxes" ref={box9} onClick={(e)=>{toggle(e,8)}}></div>
            </div>
        </div>
        <button className="reset" onClick={() => {reset()}}>Reset</button>
    </div>
  )
}

export default TicTacToe