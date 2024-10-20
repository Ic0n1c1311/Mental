import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import HealthProblems from "./pages/HealthProblems";
import Sessions from "./pages/Sessions";
import AboutUs from "./pages/AboutUs";
import Quiz from "./pages/Quiz";
import Videos from "./pages/Videos";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Appointment from "./pages/Appointment";
import { AppProvider } from "./context/AppContext";
import MyAppointments from "./pages/MyAppointments";
import Login from "./pages/login";
import Signup from "./pages/signup";
import MyProfile from "./pages/MyProfile";

function App() {
  const token = localStorage.getItem("jwtToken"); // Check for token in localStorage

  return (
    <AppProvider>
      <Router>
        {/* Always render the Navbar */}
        <Navbar />

        <Routes>
          {/* Redirect authenticated users from login/signup to home */}
          <Route
            path="/login"
            element={token ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/signup"
            element={token ? <Navigate to="/" /> : <Signup />}
          />
          {/* Home route accessible only for authenticated users */}
          <Route
            path="/"
            element={token ? <Home /> : <Navigate to="/login" />}
          />
          {/* Public routes accessible to everyone */}
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/healthProblems" element={<HealthProblems />} />
          <Route path="/sessions" element={<Sessions />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/appointment/:id" element={<Appointment />} />
          <Route path="/my-appointments" element={<MyAppointments />} />
          <Route path="/my-profile" element={<MyProfile />} />
        </Routes>

        {/* Only render the Footer if the user is authenticated */}
        {token && <Footer />}
      </Router>
    </AppProvider>
  );
}

export default App;
