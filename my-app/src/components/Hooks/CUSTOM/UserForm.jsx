import React from "react";
import useInput from "./hooks/useInput";

const UserForm = () => {
  const [firstName, bindFirstName, resetFirstName] = useInput('');
  const [lastName, bindLastName, resetLastName] = useInput('');

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`First Name - ${firstName} \nLast Name - ${lastName}`);
    resetFirstName();
    resetLastName();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>First Name</label>
          <input
            value={bindFirstName.value}
            type="text"
            onChange={bindFirstName.onChange}
          />
        </div>

        <div>
          <label>Last Name</label>
          <input
            onChange={bindLastName.onChange}
            type="text"
            value={bindLastName.value}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
