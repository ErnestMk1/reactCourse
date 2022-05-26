import cs from './App.module.css';
import Counter from './components/Counter';
import Greet from './components/Greet';
import Greetings from './components/GreetClass';
import Message from './components/Message';

const App = () => {
  return (
    <div className={cs.App}>
      {/* <Greet name="BANDERA"/>
      <Greetings someProps="wannaMakeMoney"/> */}
      {/* <Message /> */}
      <Counter />
    </div>
  );
};

export default App;
