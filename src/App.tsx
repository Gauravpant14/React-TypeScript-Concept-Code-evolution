import './App.css';
import { Award } from './components/Award';
import Button from './components/Button';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import Input from './components/Input';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

function App() {
const handleClick = (event:any, id:number) => {
console.log('Button Clicked',event,"and id is", id);
}
  return (
    <div className="App">
      <Button handleClick={(event,id) => handleClick(event,id)}/>
      <Input value='gaurav' handleChange={(e) => console.log(e,'input handlechange') }/>
    </div>
  );
}

export default App;
