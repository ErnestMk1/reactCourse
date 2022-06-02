import cs from './App.module.css';
import ClickCounterTwo from './components/RenderProps/ClickCounterTwo';
import Counter from './components/RenderProps/Counter';
import HoverCounterTwo from './components/RenderProps/HoverCounterTwo';

const App = () => {
  return (
    <div className={cs.App}>
      <Counter render={(count, incrementCounter) =>
        <ClickCounterTwo count={count} incrementCounter={incrementCounter}/>
      }/>

      <Counter render={(count, incrementCounter) =>
        <HoverCounterTwo count={count} incrementCounter={incrementCounter}/>
      }/>
    </div>
  );
};

export default App;
