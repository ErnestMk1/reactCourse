const Person = (props) => {
  return (
    <div>
      <h2>{props.person.name} is {props.person.age}. {props.person.gender ? 'She' : 'He'} can {props.person.skill}</h2>
    </div>
  );
};

export default Person;
