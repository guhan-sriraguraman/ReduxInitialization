
import './App.css';
import CustomerView from './CustomerView';
import CustomerAdd from './CutomerAdd';
import { Provider } from 'react-redux';
import { store } from './store';
function App() {
  
  return (
    <Provider store={store}>

      <div className="App">
        <CustomerAdd/>
        <CustomerView/>
      </div>
    </Provider>
  );
}

export default App;
