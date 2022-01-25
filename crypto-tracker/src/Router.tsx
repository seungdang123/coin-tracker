import { BrowserRouter, Routes, Route } from "react-router-dom";
// Switch => Routes since react-router-dom 6.x ver
// No need to install --save-dev @types/react-router-dom
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:coinId" element={<Coin />}></Route>
        <Route path="/" element={<Coins />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
