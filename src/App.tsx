import { Provider } from "react-redux";
import Store from "./assets/redux/store.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header/header.tsx";
import Home from "./pages/home/home.tsx";
import ReactPage from "./pages/react/ReactPage.tsx";
import ReduxPage from "./pages/redux/ReduxPage.tsx";
import TypescriptPage from "./pages/typescript/TypescriptPage.tsx";

function App() {
  return (
    <Provider store={Store}>
      <Header />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/react" element={<ReactPage />} />
          <Route path="/typescript" element={<TypescriptPage />} />
          <Route path="/redux" element={<ReduxPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
