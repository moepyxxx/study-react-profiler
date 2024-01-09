import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Page1 } from "./components/Page1";
import { Page2 } from "./components/Page2";
import { Page3 } from "./components/Page3";

const App = () => {
  return (
    <>
      <h1>Hello World</h1>
      <p>App.jsx</p>
      {/* BrowserRouter, Routes, Route の定義、path に一致する element を表示 */}
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
