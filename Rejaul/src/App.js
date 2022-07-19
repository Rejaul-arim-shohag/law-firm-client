import { Fragment } from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import TeamPage from "./Pages/TeamPage";


function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/team" element={<TeamPage />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
