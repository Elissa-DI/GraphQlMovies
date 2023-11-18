import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Movies from './containers/movies';
import AddMovie from './components/AddMovie';

function App() {
  return (
    <div className="App min-h-screen">
       <Header />
       <Movies />
       <AddMovie />
       <Footer />
    </div>
  );
}

export default App;
