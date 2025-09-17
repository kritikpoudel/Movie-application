import MovieCard from "./components/MovieCard";
import NavBar from "./components/NavBar";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import { MovieProvider } from "./context/MovieContext";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="flex-1 p-8 box-border w-full flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
