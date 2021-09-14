import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';

function App() {
  const personName ={
    first:'john',
    middleName:'chandra',
    last:'cena',
  }
  const nameList = [
    {
      first: 'Oscar',
      last: 'David'
    },
    {
      first: 'john',
      last: 'abbacus'
    },
    {
      first: 'Amit',
      last: 'Pandey'
    }
  ]

  return (
    <div className="App">
     <Greet name='Gaurav' messageCount={20} isLoggedIn={false}/>
     <Person name={personName} />
     <PersonList names={nameList}/>
    </div>
  );
}

export default App;
