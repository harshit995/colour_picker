import React, { useState } from 'react';
import ColorPicker from './Components/ColorPicker';
import './App.css'

function App() {
  const colors = [
    '#FFC0CB',
    '#2cf76a',
    '#FFFF00',
    '#FF8C00',
    '#FF00FF',
    '#00FFFF',
    '#FFA500',
    '#800080',
    '#FF0000',
    '#00CED1',
    '#0000FF',
    '#8B4513',
    '#008000',
    '#FF6347',
    '#FFD700',
    '#4682B4',
  ];

  const [selectedColor, setSelectedColor] = useState('');

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="app">
      <div className="app_colorpicker_container" style={{ backgroundColor: selectedColor }}>

        <ColorPicker colors={colors} onColorSelect={handleColorSelect} />
        <h1 className="color-picker-title">Colour Picker</h1>
      </div>
    </div>
  );
}

export default App;
