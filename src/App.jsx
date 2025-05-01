import Navbar from "./components/Navbar";
import AllRoutes from "./routes/AllRoutes";
import Footer from "./components/Footer";
import { useLocation } from "react-router-dom";

function App() {

  const location = useLocation();
  const hideNavbar =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div>
      {!hideNavbar && <Navbar />}
      <AllRoutes />
      {!hideNavbar && <Footer />}
    </div>
  );
}

export default App;
