import cs from './App.module.css';
import HookCounterFour from './components/Hooks/HookCounterFour';

const App = () => {
  return (
    <div className={cs.App}>
      <HookCounterFour />
    </div>
  );
};

export default App;
