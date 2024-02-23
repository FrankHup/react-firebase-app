import { useState } from "react";

export function Register() {
  const [user, setUser] = useState({ name: "", email: "" });

  const handleChange = ({target:{name, value}}) => {
    setUser({...user, [name]:value})
  };

  return (
    <form>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        onChange={handleChange}
      />
      <br />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="pwd"
        placeholder="Enter your password"
        onChange={handleChange}
      />
      <br />
      <button>Register</button>
    </form>
  );
}
