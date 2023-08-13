import { Route, Routes } from "react-router-dom";
import { Home, Wishlist, StarredMovies, MoviePage } from "./container";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:movieName" element={<MoviePage />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/starredMovies" element={<StarredMovies />} />
      </Routes>
    </div>
  );
}

export default App;
