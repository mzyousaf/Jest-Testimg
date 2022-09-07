import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';

function App(testId) {
  const id = testId
  return (
    <div className="App">
      <h1>jest unit testings\</h1>
      <Counter></Counter>
    </div>
  );
}

export default App;
