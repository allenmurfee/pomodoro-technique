import logo from './logo.svg';
import './App.css';
import Pomodoro from "./components/Pomodoro"
import Header from "./components/Header"

function App() {
  return (
    <div className="App">
      <Header />
      <Pomodoro />
    </div>
  );
}

export default App;
