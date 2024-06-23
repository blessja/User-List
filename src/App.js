import React, { useState } from "react";
import UserList from "./componets/UserList";
import UserDetails from "./componets/UserDetails";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="container mt-4">
      <div className="row mt-5">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <UserList onSelectUser={handleSelectUser} />
        </div>
        <div className="col-md-4">
          <UserDetails user={selectedUser} />
        </div>
      </div>
    </div>
  );
};

export default App;
