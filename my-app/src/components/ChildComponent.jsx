const ChildComponent = (props) => {
  return (
    <div>
      <button onClick={() => props.greetParent('Ernest')}>Greet Parent</button>
    </div>
  );
};

export default ChildComponent;

