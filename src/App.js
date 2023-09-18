import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./components/animatedRoutes/animatedRoutes";
import './app.css';

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
