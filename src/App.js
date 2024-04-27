import './App.css';
import Body from './components/Body';
import {Provider} from "react-redux"
import appstore from "./components/utils/appstore"

function App() {
  return (
    <Provider store={appstore}>
    <Body/>
    </Provider>
  );
}

export default App;
