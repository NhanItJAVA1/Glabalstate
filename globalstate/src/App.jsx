import { Provider } from 'react-redux';
import store from './store/storeRedux.js';
import storeCouter from './store/CounterSlice.js';
import CounterRedux from './components/CounterRedux';
import storeList from './store/storeToDoSlice.js';
import TodoList from './components/todoList.jsx';
import storeTheme from './store/storeTheme.js';
import ThemeToggle from './components/ThemeToggle.jsx';
import storeCart from './store/storeCart.js';
import storeUser from './store/storeUser.js';
import '../src/components/theme.css';
import Cart from './components/Cart.jsx';
import FoodList from './data/FoodList.jsx';
import LoginForm from './components/LoginForm.jsx';
import UserGreeting from './components/UserGreeting.jsx';

function App() {
  return (
    <Provider store={storeUser}>
      <div className="App">
        <LoginForm />
      </div>
    </Provider>
  );
}

export default App;
