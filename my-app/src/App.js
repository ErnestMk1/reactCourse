import cs from './App.module.css';
import DataFetching from './components/Hooks/useEffect/DataFetching';

const App = () => {
  return (
    <div className={cs.App}>
      <DataFetching />
    </div>
  );
};

export default App;
