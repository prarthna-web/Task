import './App.css';
import TaskList from './TaskList';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    
      <Router>
       
           <Routes>
             <Route path='/' element={<TaskList/>}></Route>          
          </Routes>
      </Router>
      
    </div>
  );
}

export default App;