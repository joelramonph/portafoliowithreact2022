import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Intro from './components/intro/Intro'
import About from './components/about/About'
import ProductList from './components/productList/ProductList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Intro />
      <About />
      <ProductList />
    </div>
  )
}

export default App
