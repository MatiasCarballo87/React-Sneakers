import NavBar from './components/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer greeting="ALL PRODUCTS"/>}/>
      <Route path='/category/:Id' element={<ItemListContainer />}/>
      <Route path='/item/:id' element={<ItemDetailContainer />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
