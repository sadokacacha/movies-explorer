import './App.css';
import NavBar from './components/NavBar/NavBar';
import Main from './components/Main/Main';
import NewMovies from './components/NewMovies/NewMovies';
import Popular from './components/Popular/Popular';


function App() {
  return (
    <div>
      <NavBar />
      <Main />
      <NewMovies />
      <Popular/>
    </div>
  );
}

export default App;
