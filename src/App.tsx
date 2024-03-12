import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
// import "./App.css";
import Home from "./components/Home";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

function App() {
  return (
    <>
    <Navbar />
    <section className="section">
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/index" element={<Home />} />
        </Route>
        {/* <Route path="/login" element={ <Login />  } /> */}
        <Route index element={<Home />} />
      </Routes>
      </section>
      <Footer />
    </>
  );
}

export default App;