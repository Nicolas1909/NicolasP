import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <AboutMe></AboutMe>
    </div>
  );
}

export default App;