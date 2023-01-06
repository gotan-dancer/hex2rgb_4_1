import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function Hex2Rgb()
{
  const [form, setForm] = useState({
    bgColor:,
    hex:,
    rgb:
  });

  const handleChange = (event) => {
    const ( hex, type ) = event.target;

    setForm((prevForm) => ({
        ...prevForm,
        [hex]: type === event.target.value;
    }));
  }

  <canvas width="200" height="200" style="background: #f4f4f4;">
	</canvas> 
  
  let canvas = document.querySelector('canvas');
  let ctx = canvas.getContext('2d');

  ctx.fillRect(50, 50, 100, 100);
  //ctx.clearRect(75, 75, 50, 50);

  return <form>
    //<></>
    <input type="text" name="hex" value={form.hex} onChange={handleChange} />
    <input type="text" name="rgb" value={form.rgb} onChange={handleChange} />
  </form>
}

function App() {
  return (
    <div>
        <Hex2Rgb />      
    </div>
  );
}

export default App;
