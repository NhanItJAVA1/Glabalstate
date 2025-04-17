import { Provider } from 'react-redux';
import store from './store/storeRedux.js';
import storeCouter from './store/CounterSlice.js';
import CounterRedux from './components/CounterRedux';
import storeList from './store/storeToDoSlice.js';
import TodoList from './components/todoList.jsx';
import storeTheme from './store/storeTheme.js';
import ThemeToggle from './components/ThemeToggle.jsx';
import '../src/components/theme.css';

function App() {
  return (
    <Provider store={storeTheme}>
      <ThemeToggle />
    </Provider>
  );
}

export default App;
