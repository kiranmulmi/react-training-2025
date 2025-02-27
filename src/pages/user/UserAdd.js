import React, { useState } from "react";

const UserAdd = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [role, setRole] = useState("");

  const [nameError, setNameError] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  }
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  } 
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handleSubmit = () => {
    if (name === "") {
      setNameError("Name is required");
      return;
    }
    const savingData = {
      name: name,
      email: email,
      age: age,
      role: role
    };
    console.log(savingData);
  }
  return (
    <div>
      <h1>Add User</h1>
      <form>
        <div>
          <label>Name</label>
          <input type="text" value={name} onChange={handleNameChange} />
          <div>{nameError}</div>
        </div>
        <div>
          <label>Age</label>
          <input type="number" value={age} onChange={handleAgeChange} />
        </div>
        <div>
          <label>Email</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Role</label>
          <select onChange={(e) => {
            setRole(e.target.value);
          }}>
            <option value="">--Select Role---</option>
            <option value="admin" selected={role === "admin"}>Admin</option>
            <option value="user" selected={role === "user"}>User</option>
          </select>
        </div>
        <button type="button" onClick={handleSubmit}>Save</button>
      </form>
    </div>
  )
}

export default UserAdd;