import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Home from './Pages/Home/Home';
import Details from './Pages/Details/Details';
import Listing from './Pages/Listing/Listing';
import { Routes, Route, Outlet } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'; // lib
function App() {
  // https://image.tmdb.org/t/p/original/wigZBAmNrIhxp2FNGOROUAeHvdh.jpg
  return (
    <div className="bg-dark bg-gradient text-white">
      <Navigation />

     {/* <Home /> */}
     
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/listing" element={<Listing />} />
      <Route path="/listing/:id" element={<Details />} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;
