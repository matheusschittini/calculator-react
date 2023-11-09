import './Calculator.css';
import Container from '@mui/material/Container';
import { Box } from '@mui/material';
import React, { useState } from 'react';

function Calculator() {
    
    const [number, setNumber] = useState(0);
    const [oldNumber, setOldNumber] = useState(0);
    const [operator, setOperator] = useState('');

    function inputNumber(event) {
        event.preventDefault();
        if (!event.target.value.includes('.')) {
            if (number === 0) {
                setNumber(event.target.value);
            } else {
                setNumber(number + event.target.value);
            }
        } else {
            const newValue = event.target.value.replace(".","");
            setNumber(number + newValue);
        }
    }

    function clear() {
        setNumber(0);
    }

    function percentage() {
        setNumber(number/100);
    }

    function changeSign() {
            setNumber(number*(-1));
    }

    function operatorHandler(event) {
        event.preventDefault();
        const operatorValue = event.target.value;
        setOperator(operatorValue)
        setOldNumber(number);
        setNumber(0);
    }

    function calculate() {
        if (operator === "+") {
            const result = parseFloat(oldNumber) + parseFloat(number);
            setNumber(result);
        } else if (operator === "X") {
            const result = parseFloat(oldNumber) * parseFloat(number);
            setNumber(result);
        } else if (operator === "-") {
            const result = parseFloat(oldNumber) - parseFloat(number);
            setNumber(result);
        } else if (operator === "/") {
            if (number === "0") {
                const result = "Error!";
                setNumber(result);
            } else {
                const result = parseFloat(oldNumber) / parseFloat(number);
                const isInteger = Number.isInteger(result);
                if (isInteger) {
                    setNumber(result);
                } else {
                    setNumber(parseFloat(result.toFixed(14)));
                }
            }
        } 
    }
    
    return (
        <div>
            <Box m={5}/>
            <Container maxWidth="xs">
                <div className="wrapper">
                    <Box m={11}/>
                    <h1 className="result">{number}</h1>
                    <button className="other" onClick={clear}>AC</button>
                    <button className="other" onClick={changeSign}>+/-</button>
                    <button className="other" onClick={percentage}>%</button>
                    <button className="operator division" value="/" onClick={operatorHandler}>÷</button>
                    <button className="number" value={7} onClick={inputNumber}>7</button>
                    <button className="number" value={8} onClick={inputNumber}>8</button>
                    <button className="number" value={9} onClick={inputNumber}>9</button>
                    <button className="operator" value="X" onClick={operatorHandler}>x</button>
                    <button className="number" value={4} onClick={inputNumber}>4</button>
                    <button className="number" value={5} onClick={inputNumber}>5</button>
                    <button className="number" value={6} onClick={inputNumber}>6</button>
                    <button className="operator" value="-" onClick={operatorHandler}>-</button>
                    <button className="number" value={1} onClick={inputNumber}>1</button>
                    <button className="number" value={2} onClick={inputNumber}>2</button>
                    <button className="number" value={3} onClick={inputNumber}>3</button>
                    <button className="operator" value="+" onClick={operatorHandler}>+</button>
                    <button className="number zero" value="0" onClick={inputNumber}>0</button>
                    <button className="number" onClick={inputNumber} value=".">.</button>
                    <button className="operator" value="=" onClick={calculate}>=</button>
                </div>
            </Container>
        </div>
    )
}

export default Calculator;