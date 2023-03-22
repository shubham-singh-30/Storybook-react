import logo from './logo.svg';
import './App.css';
import './index.css';
 import { Provider } from 'react-redux';
 import InboxScreen from './components/InboxScreen';

 import store from './lib/store';
function App() {
  return (
    <div className="App">
      {/* <h1 className="App-header">
        Hello
      </h1> */}
      <Provider store={store}>
+     <InboxScreen />
+   </Provider>
    </div>
    
  );
}

export default App;
