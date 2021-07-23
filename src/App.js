
import { useEffect, React, useState } from 'react';
import './App.css';
import Person from './components/Persons/Person';

function App() {
  const [users, setUsers] = useState([]);
  const [team, setTeam] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10')
      .then(res => res.json())
      .then(data => setUsers(data.results))
  }, []);

  const handleAddTeam = (props) => setTeam([...team, props]);

  
  return (
    <div className="App">
      <div className="userList">
        {
          users.map(user => <Person users={user} handleAddTeam={handleAddTeam}></Person>)
        }
      </div>
      <div className="team">
        <h1>My Team</h1>
        <ul>
          {
            team.map(team => <li>{team.name.title+" "+team.name.first}</li> )
          }
        </ul>

      </div>

    </div>
  );
}

export default App;
