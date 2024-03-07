import './App.css'
import HelloWorld from './components/HelloWorld';
function App() {
  const data = "world!!!!"
  return (
    <div>
    <h1 style={ {color : 'white', backgroundColor:'black'}}>React Project</h1>
    <br />
    <HelloWorld/>
    <h2>Journey to React {data}</h2>
    <p className="hello">I'm loving React so much. I don't realized it earlier. Looking forward to it.</p>
    <HelloWorld/>
    </div>
  );
}

export default App;