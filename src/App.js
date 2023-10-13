import logo from './logo.svg';
import './App.css';
import TasksList from './components/TaskList';

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
        <TasksList />
      </div>
    </div>
  );
}

export default App;
