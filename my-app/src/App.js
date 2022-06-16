import cs from './App.module.css';
import React from 'react';
import OneDataFetching from './components/Hooks/Fetching/OneDataFetching';
import TwoDataFetching from './components/Hooks/Fetching/TwoDataFetching';

const App = () => {
  return (
    <div className={cs.App}>
      {/* <OneDataFetching /> */}
      <TwoDataFetching />
    </div>
  );
};

export default App;
