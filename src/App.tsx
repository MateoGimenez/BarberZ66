import './App.css'
import NavBar from './components/NavBar'
import Home from './page/home/home'
import About from './page/about/about'
import Reserve from './page/reserve/reserve'
import TestSupabase from './components/testSupabase'

function App() {

  return (
    <>
      <div className="app">
        <NavBar/> 
        <Home/>
        <About/>
        <Reserve/>

        <TestSupabase/>
      </div>     
    </>
  )
}

export default App
