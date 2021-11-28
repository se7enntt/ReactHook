import logo from './logo.svg';
import './App.css';

//template & logic
// function App() {do something} <=> const App = () => {do something}
//JSX

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>Hello world from React Hook</div>
      </header>
    </div>
  );
}

export default App;
