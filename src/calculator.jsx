import { Box, Typography,Button,Grid } from '@mui/material';
import React, { useState } from 'react'


const buttons=[
  ['AC','DE','%','/'],
  ['7','8','9','*'],
  ['4','5','6','-'],
  ['1','2','3','+'],
  ['00','0','.','='],
];

const Calculator = () => {
  const [input,setInput] = useState('');

  const handleClick = (value) => {
    if (value === 'AC') {
      setInput('');
    }else if (value === 'DE'){
      setInput(input.slice(0, -1));
    }else if (value === '=') {
      try{
      setInput(eval(input).toString());
      } catch{ 
        setInput('Error');
       }
      }else {
        setInput(input + value);
       }
    };

  return (
    <Box
    sx={{
      width:300,
      margin: '50px auto',
      padding: '3px',
      borderRadius: 4,
      backgroundColor: '#1e1e1e',
      boxShadow: 'inset -4px -4px 10px #2b2b2b, inset 4px 4px 10px #111111',
    }}
    >
      
      <Typography
      variant="h4"
      sx={{ 
        backgroundColor: '#1e1e1e',
        color:'white',
        padding: 2,
        borderRadius:2,
        textAlign:'right',
        marginBottom: 2,
        boxShadow: 'inset 2px 2px 6px #111, inset -2px -2px 6px #2a2a2a',
      }}
      >
        {input || '0'}
      </Typography>
           <Grid container spacing={1}>
             {buttons.flat().map((btn, i) => (
               <Grid item xs={3} key={i}>
                 <Button
                   fullWidth
                   onClick={() => handleClick(btn)}
                   sx={{
                     padding: 2,
                     fontSize: '1.2rem',
                     borderRadius: '12px',
                     color: ['AC', 'DE', '%', '/'].includes(btn)
                       ? '#00ff88'
                       : btn === '='
                       ? '#fff'
                       : '#fff',
                     backgroundColor:
                       btn === '=' ? 'orange' : '#1e1e1e',
                     boxShadow:
                       '4px 4px 10px #141414, -4px -4px 10px #2a2a2a',
                     '&:active': {
                       boxShadow:
                         'inset 2px 2px 5px #111, inset -2px -2px 5px #2a2a2a',
                     },
                   }}
                 >
                   {btn}
                 </Button>
               </Grid>
             ))}
           </Grid>
    </Box>
  )
}

export default Calculator
