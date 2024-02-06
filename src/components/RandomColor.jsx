import React,{ useEffect, useState } from 'react'

const RandomColor = () => {
  const [color,setColor] = useState('#000000');
  const [colorType, setColorType] = useState('Hex');

    function utilRandomNumber(length){
        return Math.floor(Math.random()*length);
    }

  function handleCreateRandomHexColor(){
    const hex = [1,2,3,4,5,6,7,8,9,0,'A','B','C','D','E'];
    let hexColor ="#";
    
    for(let i=0;i<6;i++){
        hexColor+=hex[utilRandomNumber(hex.length)];
    }
    setColor(hexColor);
    //console.log(hexColor);
  }

  function handleCreateRandomRGBColor(){
    const r =utilRandomNumber(256);
    const g =utilRandomNumber(256);
    const b =utilRandomNumber(256);

    setColor(`rgb${r}${g}${b}`);
   // console.log(color);
  }

  useEffect(() => {
    if (colorType === 'RGB') handleCreateRandomRGBColor();
    else handleCreateRandomHexColor();
  },[colorType]);

  return (
    <div className='container' style={{
        width :'100vw',
        height : '100vh',
        background :color,
        border:'0px',
        margin:'0px',padding:'0px',
        boxSizing:'border-box'
    }}>
        <div className='btn-container' style={{
            display:'flex',
            justifyContent:'center',
            paddingTop:'10px'
        }}>
            <button onClick={() => setColorType('Hex')}>Create HEX Color</button>
            <button onClick={() => setColorType('RGB')}>Create RGB Color</button>
            <button onClick={ colorType === 'Hex' ? handleCreateRandomHexColor : handleCreateRandomRGBColor }>Generate Random Color</button>
        </div>
        <div style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            fontSize:'60px',
            color:'#fff',
            marginTop:'50px',
            flexDirection:'column',
            gap:'10px'
        }}>
            <h3>{colorType === 'RGB' ? "RGB Color" : "Hex Color" }</h3>
            <h1>{color}</h1>
        </div>
    </div>
  )
}

export default RandomColor