import logo from './logo.png';
import './App.css';
import Hello from './Hello';
import Mongo from './Mongo';

function App() {
  return (
    <div className="App">
      <img src={logo} className="sd-logo" alt="ScaleDynamics" />
      <Hello />
      <Mongo />
    </div>
  );
}

export default App;
