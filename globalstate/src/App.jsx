import { Provider } from 'react-redux';
import store from './store/storeRedux.js';
import storeCouter from './store/CounterSlice.js';
import CounterRedux from './components/CounterRedux';
import storeList from './store/storeToDoSlice.js';
import TodoList from './components/todoList.jsx';

function App() {
  return (
    <Provider store={storeList}>
      <TodoList />
    </Provider>
  );
}

export default App;
