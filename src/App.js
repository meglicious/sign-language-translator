import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./views/Startup";
import Profile from "./views/Profile";
import Translation from "./views/Translation";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Startup />} />
          <Route path="/translation" element={<Translation />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
