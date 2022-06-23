import cs from './App.module.css';
import React from 'react';
import UserForm from './components/Hooks/CUSTOM/UserForm';

const App = () => {
  return (
    <div className={cs.App}>
      <UserForm />
    </div>
  );
};

export default App;
