import React, { useState, } from 'react';

const HookCounterThree = () => {
  const [name, setName] = useState({firstName: '', lastName: ''});

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="First Name"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />

        <h3>{`Your first name: ${name.firstName}`}</h3>
        <h3>{`Your last name: ${name.lastName}`}</h3>
      </form>
    </div>
  );
};

export default HookCounterThree;
