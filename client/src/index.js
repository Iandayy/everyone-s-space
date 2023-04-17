import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import { RecoilRoot } from "recoil";

import App from "./App";
import Loding from "./components/Loding";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RecoilRoot>
    <Suspense fallback={<Loding />}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </RecoilRoot>
);
