import './App.css';
import { BrowserRouter, Routes , Route} from "react-router-dom";
import Home from './pageComponents/Home';
import About from './pageComponents/About';
import Contact from './pageComponents/Contact';
import Item from './pageComponents/Item';
import Search from './pageComponents/Search';
import Error from './pageComponents/Error';
import Login from './pageComponents/Login';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path='login' element={<Login/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/item" element={<Item/>}></Route>
            <Route path="/search" element={<Search/>}></Route>
            <Route path="*" element={<Error/>}></Route>
          </Routes>
         </BrowserRouter>
        <div>
          <Footer />
        </div>
    </div>
  );
}

export default App;
