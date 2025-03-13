import './App.css';
import Layout from "./components/Layout";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import PokemonDetail from "./components/PokemonDetail";
import Pokedex from "./components/Pokedex";

function App() {
  return (
      <Router>
          <Layout>
              <Routes>
                  <Route path="/" element={<Pokedex />} />
                  <Route path="/pokemon/:name" element={<PokemonDetail />} />
              </Routes>
          </Layout>
      </Router>

  );
}

export default App;
