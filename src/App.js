import logo from './logo.svg';
import './App.css';
import SimpleForm from './SimpleForm';
import SimpleNewsLetter from './NewsLetterForms/SimpleNewsLetter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* <SimpleForm/> */}
    <SimpleNewsLetter/>
      </header>
    </div>
  );
}

export default App;
