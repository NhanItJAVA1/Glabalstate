import { Provider } from 'react-redux';
import store from './store/storeRedux.js'; // Import chính xác store từ storeRedux.js
import CounterRedux from './components/CounterRedux';

function App() {
  return (
    <Provider store={store}>
      <CounterRedux />
    </Provider>
  );
}

export default App;
