
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/pages/ItemListContainer/ItemListContainer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Item from './Components/Item/Item';
import ItemDetailContainer from './Components/pages/ItemDetailContainer/ItemDetailContainer.jsx';


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
