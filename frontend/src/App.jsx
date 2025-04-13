import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from "react-router-dom";
import Navbar from "./UserInterface/Components/Navbar";
import Navigation from "./AdminDashboard/components/Navigation";
import Footer from "./UserInterface/Components/Footer";
import Login from "./UserInterface/LoginPages/Login";
import Register from "./UserInterface/LoginPages/Register";
import Reset from "./UserInterface/LoginPages/Reset";
import Home from "./UserInterface/Routes/Home";
import About from "./UserInterface/Routes/About";
import VirtualTour from "./VirtualTour";
import Story from "./UserInterface/Routes/Story";
import Bookmarks from "./UserInterface/Routes/Bookmarks";
import UserProfile from "./UserInterface/Routes/UserProfile";
import Setting from "./UserInterface/Routes/Setting";
import AdminDashboard from "./AdminDashboard/AdminPages/Dashboard";
import AdminUsers from "./AdminDashboard/AdminPages/Users";
import AdminLogs from "./AdminDashboard/AdminPages/Logs";
import ContentCreatorDashboard from "./ContentCreater/Components/ContentCreatorDashboard"; 
import ContentCreatorProfile from "./ContentCreater/Components/Profile"; 
import ContentCreatorSidebar from "./ContentCreater/Components/sidebar"; 
import ContentCreatorMyherbs from "./ContentCreater/Components/MyHerbs"; 
import ContentCreatorAddherbs from "./ContentCreater/Components/AddHerb"; 
import ProtectedRoute from "./ProtectedRoute";
import AuthProvider from "./AuthContext";

// NotFound Component
const NotFound = () => (
  <div>
    <h1>404 - Page Not Found</h1>
    <p>Oops! The page you're looking for doesn't exist.</p>
  </div>
);

// Layout Component for User Pages
const UserLayout = () => (
  <>
    <Navbar />
    <div className="flex-grow">
      {/* <Outlet /> */}
    </div>
    <Footer />
  </>
);

// Layout Component for Admin Pages
const AdminLayout = () => (
  <div className="flex">
    <Navigation />
    <div className="ml-64 flex-grow p-4">
      <Outlet />
    </div>
  </div>
);

const ContentCreatorLayout = () => (
  <div className="flex">
    <ContentCreatorSidebar />
    <div className="ml-64 flex-grow p-4">
      <Outlet />
    </div>
  </div>
);

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    if (token && user) {
      setIsAuthenticated(true);
      setUserRole(user.role);
    }
  }, []);

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login setIsAuthenticated={setIsAuthenticated} setUserRole={setUserRole} />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/reset",
      element: <Reset />,
    },
    {
      path: "/",
      element: isAuthenticated ? (
        <UserLayout />
      ) : (
        <Navigate to="/login" />
      ),
      children: [
        { index: true, element: <Home /> },  // This will show Home only once on "/"
        { path: "home", element: <Home /> },  // Removed redundant Home route
        { path: "about", element: <About /> },
        { path: "virtualTour", element: <VirtualTour /> },
        { path: "story", element: <Story /> },
        { path: "bookmarks", element: <Bookmarks /> },
        { path: "profile", element: <UserProfile /> },
        { path: "setting", element: <Setting /> },
      ],
    },
    {
      path: "/admin",
      element: (
        <ProtectedRoute
          isAuthenticated={isAuthenticated}
          allowedRoles={["admin"]}
          userRole={userRole}
        >
          <AdminLayout />
        </ProtectedRoute>
      ),
      children: [
        { index: true, element: <AdminDashboard /> },
        { path: "dashboard", element: <AdminDashboard /> },
        { path: "users", element: <AdminUsers /> },
        // { path: "logs", element: <AdminLogs /> },
      ],
    },
    {
      path: "/content-creator",
      element: (
        <ProtectedRoute
          isAuthenticated={isAuthenticated}
          allowedRoles={["content-creator"]}
          userRole={userRole}
        >
          <ContentCreatorLayout />
        </ProtectedRoute>
      ),
      children: [
        { index: true, element: <ContentCreatorDashboard /> },
        { path: "profile", element: <ContentCreatorProfile /> },
        { path: "my-herbs", element: <ContentCreatorMyherbs /> },
        { path: "add-herb", element: <ContentCreatorAddherbs /> },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <AuthProvider>
      <div className="flex flex-col min-h-screen">
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  );
};

export default App;
