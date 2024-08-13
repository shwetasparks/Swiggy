import { Routes,Route } from 'react-router-dom';
import Body from "./components/Body";
import Navbar  from './components/Navbar.jsx';
import './index.css'

function App() {
    return (
        <Routes>
                <Route path="/" element={<Navbar />} >    
                     <Route path="/" element={<Body />} />  
                 </Route>
        </Routes>
    );
}

export default App;
