import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Page1 } from "./components/Page1";
import { Page2 } from "./components/Page2";
import { Page3 } from "./components/Page3";
import { Page4 } from "./components/Page4";
import { FC } from "react";

const App = () => {
  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "800px",
        margin: "0 auto",
      }}>
      <Title />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;

const Title: FC = () => {
  return <h1>check performance!</h1>;
};
