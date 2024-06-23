import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const UserDetails = ({ user }) => {
  if (!user) {
    return <div className="p-4">Select a user to see their details.</div>;
  }

  return (
    <div className="card p-4 sticky-top" mt-5>
      <img
        src={user.avatar}
        alt={user.profile.firstName}
        className="card-img-top rounded-circle"
        width="60"
        height="60"
      />
      <div className="card-body">
        <h5 className="card-title">
          {user.profile.firstName} {user.profile.lastName}
        </h5>
        <p className="card-text">
          <strong>Job Title: </strong>
          {user.jobTitle}
        </p>
        <p className="card-text">
          <strong>Bio: </strong>
          {user.Bio}
        </p>
        <p className="card-text">
          <strong>Email: </strong>
          {user.profile.email}
        </p>
        <p className="card-text">
          <strong>Username: </strong>
          {user.profile.username}
        </p>
      </div>
    </div>
  );
};

export default UserDetails;
