import cs from './App.module.css';
import EventBind from './components/EventBind';
import Greeting from './components/Greeting';
import Message from './components/Message';
import NameList from './components/People/NameList';
import Form from './components/Form/Form';
import LifecycleA from './components/LifecycleA';

const App = () => {
  return (
    <div className={cs.App}>
      {/* <Message /> */}
      {/* <EventBind /> */}
      {/* <Greeting /> */}
      {/* <NameList /> */}
      {/* <Form /> */}
      <LifecycleA />
    </div>
  );
};

export default App;
