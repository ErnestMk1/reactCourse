import cs from './App.module.css';
import Greet from './components/Greet';
import Greetings from './components/GreetClass';

function App() {
  return (
    <div className={cs.App}>
      <Greet />
      <Greetings />
    </div>
  );
}

export default App;
