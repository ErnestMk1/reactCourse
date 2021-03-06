import Person from "./Person";
import css from './NameList.module.css';

const NameList = () => {
  const persons = [
    {
      id: 1,
      name: 'Ernest',
      age: 18,
      skill: 'be stupid all the time',
      gender: false,
    },
    {
      id: 2,
      name: 'Angelina',
      age: 17,
      skill: 'overthink',
      gender: true,
    },
    {
      id: 3,
      name: 'Maris',
      age: 12,
      skill: 'do sport',
      gender: false,
    },
  ];

  return (
    <div className={css.mainDiv}>
      {persons.map(person => <Person key={person.id} person={person}/>)}
    </div>
  );
};

export default NameList;
