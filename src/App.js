import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Home from './Pages/Home/Home';
import Details from './Pages/Details/Details';
import Listing from './Pages/Listing/Listing';
import SearchPage from './Pages/Search/SearchPage';
import Year from './Pages/TimeLine/Year';
import { Routes, Route, Outlet } from 'react-router-dom';
import CategoriesListing from './Pages/Categories/CategoriesListing';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'; // lib
function App() {
  // https://image.tmdb.org/t/p/original/wigZBAmNrIhxp2FNGOROUAeHvdh.jpg
  return (
    <div className="bg-dark bg-gradient text-white fullbackground">
      <Navigation />

     {/* <Home /> */}
     {/* <Outlet /> */}
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/search" element={<SearchPage />} />

      <Route path="/categories/:id" element={<CategoriesListing />} />
      <Route path="/listing" element={<Listing />} />
      <Route path="/listing/:id" element={<Details />} />
      <Route path="/year" element={<Year />} />
      
      </Routes>
     
    </div>
  );
}

export default App;
