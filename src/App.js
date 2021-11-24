import logo from './logo.svg';
import './App.css';
// import TimeShow from './components/Timeshow';
import ClockList  from './components/ClockList';

function App() {
  const quantities =[1,2,3]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          Learn React 
          {/* <TimeShow locale="bn-BD"/> */}
          <ClockList quantities={quantities} />
      </header>
    </div>
  ); 
}

export default App;

