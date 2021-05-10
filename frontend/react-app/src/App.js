import logo from './logo.png';
import './App.css';
import Hello from './Hello';

function App() {
  return (
    <div className="App">
      <img src={logo} className="sd-logo" alt="ScaleDynamics" />
      <Hello />
      <div className="mongodb">
        <span>
          You can see{' '}
          <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
            mongodb
          </a>{' '}
          in action in your dev console {'>'}
        </span>
      </div>
    </div>
  );
}

export default App;
