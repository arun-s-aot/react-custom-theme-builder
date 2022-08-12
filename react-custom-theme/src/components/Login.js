import React, { useState } from "react";
import "./Login.scss";

const LoginForm = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      username,
      password,
    };
    setUser(userData);
    setUserName("");
    setPassword("");
  };
  return (
    <form method="post" class="login" onSubmit={handleSubmit}>
      <div class="container">
        <label for="uname">
          <b>Username</b>
        </label>
        <input type="text" placeholder="Enter Username" name="uname"
        onChange ={event => setUserName(event.target.value)}
        value = {username}
        required />

        <label for="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          onChange ={event => setPassword(event.target.value)}
          value = {password}
          required
        />

        <button type="submit">Login</button>
        <label>
          <input type="checkbox" checked="checked" name="remember" /> Remember
          me
        </label>
      </div>

      <div class="container">
        <button type="button" class="cancelbtn">
          Cancel
        </button>
        <span class="psw">
          Forgot <a href="#">password?</a>
        </span>
      </div>
      {user && JSON.stringify(user,null,2)}
    </form>

    
  );
};

export default LoginForm;
