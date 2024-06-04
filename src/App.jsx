import {
  Route,
  Routes,

} from "react-router-dom";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./routes/About/About"
import Experiences from "./routes/Experiences/Experiences"
import Projects from "./routes/Projects/Projects"
import Contact from "./routes/Contact/Contact"
import Homepage from "./routes/Homepage/Homepage";

function App() {

return(
  <div>
  <Routes>
  <Route path="/" element={<Homepage/>} />
  <Route path="/about" element={<About/>} />
  <Route path="/experiences" element={<Experiences/>}/>
  <Route path='/projects' element={<Projects/>} />
  <Route path='/contact' element={<Contact/>} />
</Routes>
    </div>
    )
}

export default App
