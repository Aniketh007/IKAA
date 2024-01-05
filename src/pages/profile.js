import React, { useState, useEffect } from "react";
import axios from "axios";

function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/getUsers') // Adjust the URL to match your server endpoint
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {users.map((user, index) => (
        <div key={index}>
          <h1>{user.firstname}</h1>
          <h1>{user.email}</h1>
        </div>
      ))}
    </div>
  );
}

export default User;