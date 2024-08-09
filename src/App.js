import './App.css';
import LoginForm from './Components/Forms/LoginForm/LoginForm';

function App() {
  return (
    <div className="App" data-testid="app">
      <LoginForm id='login-form'/>
    </div>
  );
}

export default App;
