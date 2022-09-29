import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={
            <ItemListContainer/>
        }/>
                <Route path='/Item/:id' element={
            <ItemDetailContainer/>
        }/>
        <Route path="/Cat/:cat" element={
            <ItemListContainer/>
        }/>
        
      </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
