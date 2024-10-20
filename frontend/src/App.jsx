// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate, // Import Navigate for redirection
// } from "react-router-dom";
// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
// import HealthProblems from "./pages/HealthProblems";
// import Sessions from "./pages/Sessions";
// import AboutUs from "./pages/AboutUs";
// import Quiz from "./pages/Quiz";
// import Videos from "./pages/Videos";
// import Footer from "./Components/Footer";
// import Navbar from "./Components/Navbar";
// import Appointment from "./pages/Appointment";
// import { AppProvider } from "./context/AppContext"; // Correct path to AppContext
// import Login from "./pages/login"; // Import Login component
// import Signup from "./pages/signup"; // Import Signup component
// import ProtectedRoute from "./Components/ProtectedRoute"; // Import ProtectedRoute

// function App() {
//   const token = localStorage.getItem("jwtToken"); // Check for token in localStorage

//   return (
//     <AppProvider>
//       <Router>
//         <Navbar />
//         <Routes>
//           {/* Redirect authenticated users from login/signup to home */}
//           <Route
//             path="/login"
//             element={token ? <Navigate to="/" /> : <Login />}
//           />
//           <Route
//             path="/signup"
//             element={token ? <Navigate to="/" /> : <Signup />}
//           />

//           {/* Protecting Home and other routes */}
//           <Route
//             path="/"
//             element={
//               <ProtectedRoute>
//                 <Home />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/blogs"
//             element={
//               <ProtectedRoute>
//                 <Blogs />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/healthProblems"
//             element={
//               <ProtectedRoute>
//                 <HealthProblems />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/sessions"
//             element={
//               <ProtectedRoute>
//                 <Sessions />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/aboutus"
//             element={
//               <ProtectedRoute>
//                 <AboutUs />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/quiz"
//             element={
//               <ProtectedRoute>
//                 <Quiz />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/videos"
//             element={
//               <ProtectedRoute>
//                 <Videos />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/appointment/:id"
//             element={
//               <ProtectedRoute>
//                 <Appointment />
//               </ProtectedRoute>
//             }
//           />
//         </Routes>
//         <Footer />
//       </Router>
//     </AppProvider>
//   );
// }

// export default App;




import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
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
import MyAppointments from './pages/MyAppointments';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./Components/ProtectedRoute";
import MyProfile from './pages/MyProfile';

function App() {
  const token = localStorage.getItem("jwtToken"); // Check for token in localStorage

  return (
    <AppProvider>
      <Router>
        {/* Only render the Navbar and Footer if the user is authenticated */}
        {token && <Navbar />}
        
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

          {/* Redirect unauthenticated users to login before home */}
          <Route
            path="/"
            element={token ? <Home /> : <Navigate to="/login" />}
          />

          {/* Protecting other routes */}
          <Route
            path="/blogs"
            element={
              <ProtectedRoute>
                <Blogs />
              </ProtectedRoute>
            }
          />
          <Route
            path="/healthProblems"
            element={
              <ProtectedRoute>
                <HealthProblems />
              </ProtectedRoute>
            }
          />
          <Route
            path="/sessions"
            element={
              <ProtectedRoute>
                <Sessions />
              </ProtectedRoute>
            }
          />
          <Route
            path="/aboutus"
            element={
              <ProtectedRoute>
                <AboutUs />
              </ProtectedRoute>
            }
          />
          <Route
            path="/quiz"
            element={
              <ProtectedRoute>
                <Quiz />
              </ProtectedRoute>
            }
          />
          <Route
            path="/videos"
            element={
              <ProtectedRoute>
                <Videos />
              </ProtectedRoute>
            }
          />
          <Route
            path="/appointment/:id"
            element={
              <ProtectedRoute>
                <Appointment />
              </ProtectedRoute>
            }
          />
          <Route
            path='/my-appointments'
            element={
              <ProtectedRoute>
                <MyAppointments />
              </ProtectedRoute>
            }
          />
          <Route
            path='/my-profile'
            element={
              <ProtectedRoute>
                <MyProfile />
              </ProtectedRoute>
            }
          />
        </Routes>

        {/* Only render the Footer if the user is authenticated */}
        {token && <Footer />}
      </Router>
    </AppProvider>
  );
}

export default App;

