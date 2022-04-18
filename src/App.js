import logo from './logo.svg';
import './App.css';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Login from './components/Login/Login';
import Blog from './components/Blog/Blog';
import Headers from './components/Headers/Headers';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import Register from './components/Register/Register';
import RequierAuth from './components/RequierAuth/RequierAuth';
import CheekOut from './components/CheekOut/CheekOut';
import NotFound from './components/NotFound/NotFound';
function App() {
  return (
    <div className="App">
      <Headers></Headers>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='service/:serviceId' element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        <Route path='/checkout' element={<RequierAuth>
          <CheekOut></CheekOut>
        </RequierAuth>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
