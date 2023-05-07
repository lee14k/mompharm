import './App.css'
import Search from './components/Search'
import Navbar from './components/Navbar'
import About from './components/About'
import  {Routes, Route, BrowserRouter} from 'react-router-dom'
function App() {

  return (
        <BrowserRouter>
              <div>

        <Navbar/>
        <Routes>
        <Route path="/about" element={<About/>} />
        </Routes>
        <Search/>

</div>
        </BrowserRouter>
     
  )
}

export default App
