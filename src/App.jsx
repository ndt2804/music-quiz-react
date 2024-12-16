import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home-page";
import RootLayout from "./pages/layouts/root-layout";
import SinglePlay from "./pages/single-play";
import "./index.css";

function App() {
  return (
    <>
      <main className='flex h-screen'>
        <Router>
          <Routes>
            <Route element={<RootLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/single-play" element={<SinglePlay />} />

            </Route>
          </Routes>
        </Router>

      </main>

    </>

  );
}

export default App;
