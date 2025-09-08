import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Data load failed");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading user...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container">
      <h2 className="my-3">User List</h2>
      <div className="row">
        {users.map((user) => (
          <div className="col-md-4 key={user.id} mb-2 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">{user.name}</h5>
              <p className="card-text">
                <strong>Email:</strong> {user.email} <br />
                <strong>Phone:</strong> {user.phone} <br />
                <strong>Company:</strong> {user.company.name} <br />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;