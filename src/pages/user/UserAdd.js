import React, { useState } from "react";

const UserAdd = () => {
  const [user, setUser] = useState(
    {
      name: "",
      age: 0,
      email: "",
      role: ""
    }
  );
  
  const [error, setError] = useState({
    name: "",
    age: "",
    email: "",
    role: ""
  });

  const handleNameChange = (e) => {
    setUser({...user, name: e.target.value});
    setError({...error, name: ""});
  }
  const handleAgeChange = (e) => {
    setUser({...user, age: e.target.value});
    setError({...error, age: ""});
  } 
  const handleEmailChange = (e) => {
    setUser({...user, email: e.target.value});
    setError({...error, email: ""});
  }

  const handleSubmit = () => {
    const validationError = {
      name: "",
      age: "",
      email: "",
      role: ""
    };

    let isValid = true;

    if (user.name === "") {
      validationError.name = "Name is required";
      isValid = false;
    }
    if (user.email === "") {
      validationError.email = "Email is required";
      isValid = false;
    }
    if (user.age === 0) {
      validationError.age = "Age is required";
      isValid = false;
    }
    if (user.role === "") {
      validationError.role = "Role is required";
      isValid = false;
    }
    setError(validationError);
    if (!isValid) {
      return;
    }
    console.log(user);
  }
  return (
    <div>
      <h1>Add User</h1>
      <form>
        <div>
          <label>Name</label>
          <input type="text" value={user.name} onChange={handleNameChange} />
          <div className="error">{error.name}</div>
        </div>
        <div>
          <label>Age</label>
          <input type="number" value={user.age} onChange={handleAgeChange} />
          <div className="error">{error.age}</div>
        </div>
        <div>
          <label>Email</label>
          <input type="email" value={user.email} onChange={handleEmailChange} />
          <div className="error">{error.email}</div>
        </div>
        <div>
          <label>Role</label>
          <select onChange={(e) => {
            setUser({...user, role: e.target.value});
            setError({...error, role: ""});
          }}>
            <option value="">--Select Role---</option>
            <option value="admin" selected={user.role === "admin"}>Admin</option>
            <option value="user" selected={user.role === "user"}>User</option>
          </select>
          <div className="error">{error.role}</div>
        </div>
        <button type="button" onClick={handleSubmit}>Save</button>
      </form>
    </div>
  )
}

export default UserAdd;