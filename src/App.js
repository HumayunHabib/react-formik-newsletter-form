import logo from './logo.svg';
import './App.css';
import SimpleForm from './SimpleForm';
import SignupForm from './NewsLetterForms/SignupForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* <SimpleForm/> */}
    <SignupForm/>
      </header>
    </div>
  );
}

export default App;
