import { useState } from 'react';
import './App.css';
// import StarRating from './Components/StarRating';
import colorData from './Components/color-data.json';
import ColorList from './Components/ColorList';
import AddColorForm from './Components/AddColorForm';
import { v4 } from 'uuid'

function App() {
  const [colors, setColors] = useState(colorData);
  return (
    <div className="App">
      <AddColorForm
        onNewColor={(title, color) => {
          const newColor = [
            ...colors,
            {
              id : v4(),
              rating: 0,
              title: title,
              color: color
            }
          ];
          setColors(newColor)
        }}
      />
      
      <ColorList 
        colors={colors} 
        onRateColor={(id, rating) => {
        const newColors = colors.map(color => 
          color.id === id ? {...color, rating } : color
        );
          setColors(newColors);
        }}

        onRemoveColor={id=>{
          const newColors = colors.filter(color => color.id!==id);
          setColors(newColors);
        }}
      />
      {/* <StarRating style={{backgroundColor:"lightblue"}} /> */}
    </div>
  );
}

export default App;
