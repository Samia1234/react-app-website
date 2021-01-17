
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import Banner from'./component/Banner'
import About from './component/About'
import Services from './component/Services'
function App() {
  return (
    <>
    <Banner/>
    <About/>
  <Services/>
    </>
  );
}

export default App;
