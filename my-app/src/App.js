import cs from './App.module.css';
import React from 'react';
import Counter from './components/Hooks/useMemo/Counter';

const App = () => {
  return (
    <div className={cs.App}>
      <Counter />
    </div>
  );
};

export default App;
