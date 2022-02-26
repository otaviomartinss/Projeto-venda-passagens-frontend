import './App.css';
import Menu from './components/utils/Menu.jsx';

import { BrowserRouter } from 'react-router-dom';
import Navbarmenu from './components/utils/Navbarmenu';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbarmenu></Navbarmenu>
      </BrowserRouter>      
    </div>
  );
}


export default App;