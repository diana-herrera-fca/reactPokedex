import './App.css';
import Layout from "./components/Layout";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import PokemonDetail from "./components/PokemonDetail";
import Pokedex from "./components/Pokedex";
import Navbar from "./components/Navbar";
import "./style.css";

function App() {
  return (
      <Router>
          <Layout>
              <Navbar />
              <Routes>
                  <Route path="/" element={<Pokedex />} />
                  <Route path="/pokemon/:id" element={<PokemonDetail />} />
              </Routes>
          </Layout>
      </Router>

  );
}

export default App;
