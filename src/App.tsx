import './App.css'
import NavBar from './components/NavBar'
import Home from './page/home/home'
import About from './page/about/about'
import Reserve from './page/reserve/reserve'
function App() {

  return (
    <>
      <div className="app">
        <NavBar/> 
        <Home/>
        <About/>
        <Reserve/>
      </div>     
    </>
  )
}

export default App
