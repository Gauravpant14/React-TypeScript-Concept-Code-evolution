import './App.css';
import { Award } from './components/Award';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

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
     <Status status="Loading" />
     <Heading>
       Exaple of component children Props passing
     </Heading>
     <Award>
     <Heading>
      Best Bollywood actor award goes to : Nobody.
     </Heading>
     <Heading>
     This is the example of passing react component as a children props. 
     </Heading>
     </Award>
    </div>
  );
}

export default App;
