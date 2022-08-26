// import logo from "./logo.svg";
import './App.css';
import SignupForm from './NewsLetterForms/SignupForm';
// import SimpleForm from "./SimpleForm";
import './styles.css';
import WithMaterialUI from './WithMaterialUI';
function App() {
  return (
    <div className="App">
      <div className="container">
        <SignupForm />
        <div>
          <h3>Formik Form Example With Material UI👇</h3>
        </div>
        <br />
        <WithMaterialUI />
      </div>
    </div>
  );
}

export default App;
