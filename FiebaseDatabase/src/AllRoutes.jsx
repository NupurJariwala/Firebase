import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import PrivateRoute from "./Components/PrivateRoute";

// import Navbar from "./Components/Navbar";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Navbar />}></Route> */}
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
