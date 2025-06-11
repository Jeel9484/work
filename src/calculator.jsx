import React, { useState } from 'react'

const button=[
["AC","DE","%","/"],
["7","8","9","*"],
["4","5","6","-"],
["1","2","3","+"],
["00","0",".","="]
];

const Calculator = () => {
const [Input,setInput]=useState('')

const Handleclick= (value) => {
    if(value === 'AC'){
        setInput('');
    }
    else if(value === 'DE'){
        setInput(Input.slice(0,-1));
    }
    else if(value === '='){
        try{
        setInput(eval(Input).toString());
        }catch{
            setInput('Error')
        }
        }else{
            setInput(Input+value);
        }
    };
  return (
    <div className='calculator'>
      <div className='display' >
        {Input||'0' }
      </div>
      <div className='button'>
          {button.flat().map((btn, i) => (
          <button
            key={i}
            className={`btn ${btn === '=' ? 'equals' : ''} ${
              ['AC', 'DE', '%', '/'].includes(btn) ? 'operator' : ''
            }`}
            onClick={() => Handleclick(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator
