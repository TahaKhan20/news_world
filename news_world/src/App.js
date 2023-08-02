import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav1 from './components/navbar';
import Home from './components/home'
function App() {
  return (
    <div className="App">
      
        <Nav1 />
        
        <Routes>
            <Route path = '/home' element = {<Home />}></Route>
        </Routes>
    </div>
  );
}

export default App;
