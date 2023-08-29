import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import Home from './page/Home'
import Navbar from './components/Navbar'
import MealDatails from './page/MealDatails'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/detail/:id' element={<MealDatails/>}/>
      </Routes>
    </div>
  )
}

export default App