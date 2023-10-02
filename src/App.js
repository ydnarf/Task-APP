import logo from './logo.svg';
import './App.css';
import Task from './components/Task'

function App() {
  return (
    <div className='app-tasks'>
      <div className='react-logo-container'>
        <img
        src={logo}
        className='react-logo' />
      </div>
      <div className='tasks-list-main'>
        <h1>My tasks</h1>
        <Task text='Aprender React'/>
      </div>
    </div>
  );
}

export default App;
