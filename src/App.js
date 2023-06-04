import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import Create from './components/Create';
import { Route, Routes } from 'react-router-dom';
import Read from './components/Read';
import Edit from './components/Edit';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route exact path='/' element={<Read />}></Route>
        <Route exact path='/Create' element={<Create />}></Route>
        <Route exact path='/edit' element={<Edit />}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
