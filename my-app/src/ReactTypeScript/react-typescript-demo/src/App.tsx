import './App.css';
import { Greet } from './components/Greet'
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';

function App() {
  const personName = {
    first: "Tony",
    last: "Stark",
  };

  const nameList = [
    {
      first: 'Thor',
      last: ''
    },
    {
      first: 'Iron',
      last: 'Man',
    },
    {
      first: 'Hulk',
      last: '',
    },
  ];

  return (
    <div className="App">
      <Greet
        messageCount={20}
        name="Ernest"
        isLoggedIn={true}
      />
      <Person name={personName} />
      <PersonList names={nameList}/>
    </div>
  );
}

export default App;
