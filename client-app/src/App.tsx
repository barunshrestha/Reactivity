import './App.css'
import ListGroup from './Components/ListGroup'
import Message from './message'

function App() {
  let items= [
    'New York',
    'Maryland',
    'New Jersey',
    'California'
];
  return <div><ListGroup items={items} heading='Cities' />
  <ListGroup items={items} heading='Town' /></div>
}
export default App
