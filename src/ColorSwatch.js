import Color from "color";

const ColorSwatch = ({ color }) => {

  if (color === 'black') {
    color = '#333';
  }

  const darkerColor = Color(color).darken(0.5).hex()

  return (
    <div style={{
      height: 100,
      width: 100,
      borderWidth: 6,
      borderColor: 'white',
      borderStyle: 'solid',
      borderRadius: '100%',
      background: `linear-gradient(315deg, ${darkerColor} 50%, ${color} 50%)`
    }}>
    </div>
  );
}

export default ColorSwatch;