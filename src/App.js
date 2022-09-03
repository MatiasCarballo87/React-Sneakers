import NavBar from './components/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

const App = () => {
  return (
    <>
      <NavBar/>
      {/* <ItemListContainer greeting="ALL PRODUCTS"/> */}
      <ItemDetailContainer />
    </>
  );
}

export default App;
