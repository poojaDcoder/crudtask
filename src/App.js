import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import{BrowserRouter as Router ,Routes ,Route} from "react-router-dom";
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import NotFound from './Components/Pages/NotFound';
import AddUser from './Components/Users/AddUser';
import EditUser from './Components/Users/EditUser';
import User from './Components/Users/User';
import Navbar from './Components/Layout/Navbar';

function App() {
  return (
    <div className='App'>
    <Router>
    <Navbar/>
      <Routes>
        <Route exact path="/home" element={<Home/>}></Route>
        <Route exact path="/about" element={<About/>}></Route>
        <Route exact path ="/contact" element={<Contact/>}></Route>
        <Route exact path ="/*" element={<NotFound/>}></Route>
        <Route exact path ="/users/add" element={<AddUser/>}></Route>
        <Route exact path ="/users/edit/:id" element={<EditUser/>}></Route>
        <Route exact path ="/users/:id" element={<User/>}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
