import cs from './App.module.css';
import Counter from './components/Counter';
import EventBind from './components/EventBind';
import Greeting from './components/Greeting';
import Message from './components/Message';
import NameList from './components/NameList';
import ParentComponent from './components/ParentComponent';

const App = () => {
  return (
    <div className={cs.App}>
      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <EventBind /> */}
      {/* <ParentComponent /> */}
      {/* <Greeting /> */}
      <NameList />
    </div>
  );
};

export default App;
