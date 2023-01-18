
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Item from './Components/Item/Item';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <header className="App-header">
      <Routes>
        <Route path='/' element={<ItemListContainer greetings="Greetings!!!"/>}/>
        <Route path='item/:id' element={<ItemDetailContainer/>} />
      </Routes>
      </header>
    </BrowserRouter>
    
    
    
  );
}

export default App;
