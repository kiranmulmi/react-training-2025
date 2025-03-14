import React, { useState, useEffect } from "react";
import { useParams } from "react-router"
import axios from 'axios';

const UserDetails = (props) => {
  let params = useParams();
  const [user, setUser] = useState({
    name: '',
    age: '',
    email: '',
    role: '',
  });
  useEffect(() => {
    axios.get(`http://localhost:4000/users/${params.userId}`)
      .then(function (response) {
        // handle success
        setUser(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h1>User Details</h1>
      <div>Full Name: {user.name}</div>
      <div>Age: {user.age}</div>
      <div>Email: {user.email}</div>
      <div>Role: {user.role}</div>
    </div>
  );
}

export default UserDetails;