import { Fragment } from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import HomePage from "./Pages/HomePage";


function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
