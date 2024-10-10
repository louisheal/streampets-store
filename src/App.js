import axios from 'axios';
import './App.css';
import ColorSwatch from './ColorSwatch';
import { useEffect, useState } from 'react';

function App() {
  const [colors, setColors] = useState([]);

  const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL
  });

  useEffect(() => {
    const fetchColors = async () => {
      const { data: colors } = await api.get('/colors');
      console.log(colors);
      setColors(colors);
    };

    fetchColors();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {colors.map(color => <ColorSwatch key={color} color={color} />)}
      </header>
    </div>
  );
}

export default App;
