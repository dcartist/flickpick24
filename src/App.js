import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Home from './Pages/Home/Home';

function App() {
  // https://image.tmdb.org/t/p/original/wigZBAmNrIhxp2FNGOROUAeHvdh.jpg
  return (
    <div className="App">
      <Navigation />
     <h1 className="title_header">FlickPick</h1>
     <Home />
    </div>
  );
}

export default App;
