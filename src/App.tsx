import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Page1 } from "./components/Page1";
import { Page2 } from "./components/Page2";
import { Page3 } from "./components/Page3";
import { useState } from "react";

const App = () => {
  const box = Array.from(new Array(10_000), (_, i) => `box${i}`);
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "800px",
        margin: "0 auto",
      }}>
      <h1>check performance!</h1>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route
            path="/page1"
            element={
              <Page1
                box={box}
                selected={selected}
                onChangeSelected={setSelected}
              />
            }
          />
          <Route
            path="/page2"
            element={
              <Page2
                box={box}
                selected={selected}
                onChangeSelected={setSelected}
              />
            }
          />
          <Route
            path="/page3"
            element={
              <Page3
                box={box}
                selected={selected}
                onChangeSelected={setSelected}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
