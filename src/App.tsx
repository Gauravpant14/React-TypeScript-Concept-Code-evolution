import './App.css';
import { Award } from './components/Award';
import Button from './components/Button';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

function App() {
const handleClick = () => {
console.log('Button Clicked');
}
  return (
    <div className="App">
      <Button handleClick={() => handleClick()}/>
    </div>
  );
}

export default App;
