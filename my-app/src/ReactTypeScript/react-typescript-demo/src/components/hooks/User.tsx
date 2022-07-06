import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);

  const handleLogin = () => {
    setUser({
      name: 'Ernest',
      email: 'ernmyr31@gmail.com',
    });
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>

      <div>User name is {user.name}</div>
      <div>User's email {user.email}</div>
    </div>
  );
};
