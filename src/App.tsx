import './App.css';
import LoginForm from './Components/LoginForm';
import RegisterForm from './Components/RegisterForm'

function App() {
  return (
    <div className="app" data-testid="app">
      <RegisterForm />
      {/* <LoginForm id='login-form'/> */}
    </div>
  );
}

export default App;
