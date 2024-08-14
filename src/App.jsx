import { Routes,Route } from 'react-router-dom';
import Body from "./components/Body";
import Navbar  from './components/Navbar.jsx';
import RestuarantMenu from './components/RestuarantMenu.jsx';
import './index.css'

function App() {
    return (
        <Routes>
                <Route path="/" element={<Navbar />} >    
                     <Route path="/" element={<Body />} />  
                     <Route path='/restuarantMenu/:id' element={<RestuarantMenu/>}/>
                 </Route>
        </Routes>
    );
}

export default App;
