import { Switch, BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js"

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        
      </div>
    </BrowserRouter>

  );
}

export default App;