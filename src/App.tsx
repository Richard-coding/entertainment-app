import { Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout";
import MoviesPage from "./pages/MoviesPage";
import TVSeriesPage from "./pages/TVSeriesPage";
import BookmarkedPage from "./pages/BookmarkedPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="tv-series" element={<TVSeriesPage />} />
          <Route path="bookmarked" element={<BookmarkedPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
