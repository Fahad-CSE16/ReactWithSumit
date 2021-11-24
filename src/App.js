import logo from './logo.svg';
import './App.css';
import Form from './components/Form'
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          Learn React 
          <Form/>
      </header>
    </div>
  ); 
}

export default App;




// import TimeShow from './components/Timeshow';
// import ClockList  from './components/ClockList';
// const quantities =[1,2,3]
// {/* <TimeShow locale="bn-BD"/>
//           <ClockList quantities={quantities} /> */}

