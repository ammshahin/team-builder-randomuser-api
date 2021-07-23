
import React  from 'react';
import { useEffect,  useState } from 'react';
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

  // const handleAddTeam = (props) => setTeam([...team, props]);
  const handleAddTeam = (props) => setTeam([...team, props]);
  
  checkDuplicate();
  function checkDuplicate() {
      let result = false;
     
      result = team.some((element, index) => {return team.indexOf(element) !== index});
      if(result) {
         window.alert('Person is already added in Team!')
         team.pop();
      } 
   }
  return (
    <div className="App">
      <div className="userList">
        {
          users.map((user, i) => <Person key={i} users={user} handleAddTeam={handleAddTeam}></Person>)
        }
      </div>
      <div className="team">
        <h1>My Team</h1>
        <ul>
          {
            team.map(team => <li>{team.name.title + " " + team.name.first}</li>)
          }
        </ul>

      </div>

    </div>
  );
}

export default App;
