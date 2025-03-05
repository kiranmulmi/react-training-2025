import React, { useState } from 'react';
import { useNavigate } from "react-router";
const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const handleUsernameChange = (e) => {
    setUser({...user, username: e.target.value});
  }
  const handlePasswordChange = (e) => {
    setUser({...user, password: e.target.value});
  }
  const handleButtonClick = () => {
    if (user.username === 'admin' && user.password === 'admin') {
      setMessage('Login successful');
      navigate('/admin/users');
    } else {
      setMessage("Incorrect username or password");
    }
  }
  return (
    <div>
      <h1>Login</h1>
      <div>
          <div>
            <label>Username</label>
            <input type="text" name="username" value={user.username} onChange={handleUsernameChange}/>
          </div>
          <div>
            <label>Password</label>
            <input type="password" name="password" onChange={handlePasswordChange} />
          </div>
          <div>{message}</div>
          <div>
            <button type="button" onClick={handleButtonClick}>Login</button>
          </div>
      </div>
    </div>
  )
}
export default Login;