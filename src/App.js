import logo from './logo.svg';
import './App.css';
import TimeShow from './components/Timeshow';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          Learn React <TimeShow locale="bn-BD"/>
      </header>
    </div>
  ); 
}

export default App;

