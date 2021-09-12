import { Route } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      {/* Membuat HOME tetap terpanggil */}
      <Route path={["game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
