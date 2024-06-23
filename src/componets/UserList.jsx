import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Spinner from "./Spinner";

const UserList = ({ onSelectUser }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://602e7c2c4410730017c50b9d.mockapi.io/users"
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="spinner">
          {loading && <Spinner loading={loading} />}
        </div>
      </div>
    );
  }

  return (
    <div className="list-group">
      {users.map((user) => (
        <div
          key={user.id}
          className="list-group-item list-group-item-action d-flex align-items-center"
          onClick={() => onSelectUser(user)}
          style={{ cursor: "pointer" }}
        >
          <img
            src={user.avatar}
            alt={user.profile.firstName}
            className="rounded-circle mr-3"
            width="60"
            height="60"
          />
          <div className="flex-grow-1">
            <h5 className="mb-1">
              {user.profile.firstName} {user.profile.lastName}
            </h5>
            <p className="mb-1">{user.jobTitle}</p>
            <small>{user.profile.email}</small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
