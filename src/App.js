import "./App.css";
import { Navigation, Stats, Footer, CryptoList } from "./components";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Stats />
      <CryptoList />
      <Footer />
    </div>
  );
}

export default App;
