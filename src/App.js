import Proposal from './Proposal';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tile from './Tile';

function App() {
  
  return (
    <Router>
      
      <Routes>
        <Route exact path='/' element={<Proposal/>}></Route>
        <Route exact path='/tile' element={<Tile/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
