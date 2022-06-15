import cs from './App.module.css';
import React from 'react';
import CounterOne from './components/Hooks/useReducer/CounterOne';
import CounterTwo from './components/Hooks/useReducer/CounterTwo';

const App = () => {
  return (
    <div className={cs.App}>
      {/* <CounterOne /> */}
      <CounterTwo />
    </div>
  );
};

export default App;
