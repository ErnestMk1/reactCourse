import css from './Person.module.css';

const Person = (props) => {
  return (
    <div className={css.mainDiv}>
      <h2 className={css.label}>{props.person.name} is {props.person.age}. {props.person.gender ? 'She' : 'He'} can {props.person.skill}</h2>
    </div>
  );
};

export default Person;
