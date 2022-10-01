import reactLogo from "./assets/react.svg";
import "./App.css";
import { useContext } from "react";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import ProductList from "./components/productList/ProductList";
import Contact from "./components/contact/Contact";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";

function App() {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App" style={{backgroundColor:darkMode ? "#111" : "white", 
    color:darkMode && "white"
    
    }}>
      
        <Toggle />
        <Intro />
        <About />
        <ProductList />
        <Contact />
     
    </div>
  );
}

export default App;
