import './App.css';
import { GroceryList } from './GroceryList';
import shoppingCart from './shopping-cart.png';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <img src={ shoppingCart } alt='cart' />
      </div>
      <div className='container'>
        <h1>Grocery list</h1>
      </div>
      <GroceryList />

    </div>
    
  );
}

export default App;
