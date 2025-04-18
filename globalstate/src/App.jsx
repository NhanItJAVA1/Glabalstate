import { Provider } from 'react-redux';
import store from './store/storeRedux.js';
import storeCouter from './store/CounterSlice.js';
import CounterRedux from './components/CounterRedux';
import storeList from './store/storeToDoSlice.js';
import TodoList from './components/todoList.jsx';
import storeTheme from './store/storeTheme.js';
import ThemeToggle from './components/ThemeToggle.jsx';
import storeCart from './store/storeCart.js';
import '../src/components/theme.css';
import Cart from './components/Cart.jsx';
import FoodList from './data/FoodList.jsx';

function App() {
  return (
    <Provider store={storeCart}>
      <div className="flex">
        <div className="flex-1 p-6">
          <h1 className="text-3xl font-bold text-center mb-6">Danh sách sản phẩm</h1>
          <FoodList />
        </div>

        <div className="w-1/3 p-6 bg-gray-50">
          <h1 className="text-3xl font-bold text-center mb-6">Giỏ hàng</h1>
          <Cart />
        </div>
      </div>
    </Provider>
  );
}

export default App;
