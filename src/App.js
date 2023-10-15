import React from "react";
import { Routes, Route } from "react-router-dom";

// PROJECT IMPORT
import Dashboard from "./features/dashboard/Dashboard";
import Campaign from "./features/campaign/Campaign";
import User from "./features/user/User";
import Profile from "./features/profile/Profile";
import MainLayout from "./components/MainLayout";
import "./App.css";

function App() {
  const user = {
    token: "2233",
  };
  return (
    <Routes>
      {user?.token ? (
        <Route path={``} element={<MainLayout />}>
          {/* DashBoard */}
          <Route>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          {/* Campaign */}
          <Route>
            <Route path="/campaign" element={<Campaign />} />
          </Route>

          {/* User */}
          <Route>
            <Route path="/user" element={<User />} />
          </Route>

          {/* Profile */}
          <Route>
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Route>
      ) : (
        <Route>{/* <Route path="/login" element={<Login />} /> */}</Route>
      )}
      {/* <Route path="*" element={<Error404 />} /> */}
    </Routes>
  );
}

export default App;
