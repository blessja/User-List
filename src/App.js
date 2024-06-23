
import './App.css';
import axios from 'axios';
import {useEffect, useState} from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/users');
      setUsers(response.data);

    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      {
        users.map(user => (
            <div key={user.id}>

            </div>
        ))
      }
    </div>
  );
}

export default App;
