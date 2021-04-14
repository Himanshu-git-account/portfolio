import './App.css';
import Header from './Component/Header/Header';
import AboutMe from './Component/AboutMe';
import TimeLines from './Component/TimeLines';
import Footer from './Component/Footer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <TimeLines />
      <Footer />
    </div>
  );
}

export default App;
