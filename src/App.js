import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';



function App() {
  return (
    <div className="App">
      <NavBar/>
    <ItemListContainer greeting="Creando mundos..."/>
    <ItemCount initial={1}stock={5}/>

      
    </div>
  );
}

export default App;
