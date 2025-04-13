import React from 'react'

const Logout = () => {
  return (
    <div>
      
    </div>
  )
}

export default Logout





// import React, { useState } from 'react';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Navbar from './UserInterface/Components/Navbar';
// import About from './UserInterface/Routs/About';
// import Home from './UserInterface/Routs/Home';
// import VirtualTour from './UserInterface/Routs/VirtualTour';
// import Quiz from './UserInterface/Routs/Quiz'; // Ensure the path to Quiz is correct

// import Bookmarks from './UserInterface/Routs/Bookmarks';
// import Story from './UserInterface/Routs/Story';
// import Logout from './UserInterface/Routs/Logout';
// import Footer from './UserInterface/Components/Footer';
// import UserProfile from './UserInterface/Routs/UserProfile';  // Importing UserProfile component
// import Setting from './UserInterface/Routs/Setting';  // Importing Setting component
// import { MdQuiz } from 'react-icons/md';
// import Login from './UserInterface/LoginPages/Login';
// import Register from './UserInterface/LoginPages/Register';
// import Reset from './UserInterface/LoginPages/Reset';

// const App = () => {
//   const [bookmarks, setBookmarks] = useState([]); // Manage bookmarks at the App level

//   // Function to add a bookmark
//   const addBookmark = (plant) => {
//     setBookmarks((prevBookmarks) => {
//       // Check if the plant is already bookmarked
//       if (!prevBookmarks.some((item) => item.id === plant.id)) {
//         return [...prevBookmarks, plant];
//       }
//       return prevBookmarks;
//     });
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       <RouterProvider
//         router={createBrowserRouter([
//           {
//             path: "/",
//             element: <Navbar />, // Navbar is common for all routes
//             children: [
//               {
//                 index: true,
//                 element: <Home addBookmark={addBookmark} />,
//               },
//               {
//                 path: "/home",
//                 element: <Home addBookmark={addBookmark} />,
//               },
//               {
//                 path: "/about",
//                 element: <About />,
//               },
//               {
//                 path: "/virtualTour",
//                 element: <VirtualTour />,
//               },
//               // {
//               //   path: "/quiz",
//               //   element: <Quiz/>,
//               // },
//               {
//                 path: "/story",
//                 element: <Story />,
//               },
//               {
//                 path: "/bookmarks",
//                 element: <Bookmarks bookmarks={bookmarks} setBookmarks={setBookmarks} />,
//               },
//               {
//                 path: "/profile",
//                 element: <UserProfile />,
//               },
//               // {
//               //   path: "/logout",
//               //   element: <Logout />,
//               // },
//               {
//                 path: "/setting",  // The new route for settings page
//                 element: <Setting />,  // Render Setting component
//               },
//             ],
//           },
//         ])}
//       />
//       <Footer /> {/* Footer will now be at the bottom of the page */}
      
//     </div>
//   );
// };

// export default App;





// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Sidebar from "./ContentCreater/Components/Sidebar";
// import ContentCreatorDashboard from "./ContentCreater/Components/ContentCreatorDashboard";
// import AddHerb from "./ContentCreater/Components/AddHerb";
// import MyHerbs from "./ContentCreater/Components/MyHerbs";
// import Profile from "./ContentCreater/Components/Profile";
//  import Footer from './UserInterface/Components/Footer';


// const App = () => {
//   return (
//     <>
//     <Router>
//       <div className="flex">
//         <Sidebar />
//         <div className="flex-1 p-5 bg-gray-100 h-screen overflow-auto">
//           <Routes>
//             <Route path="/" element={<Navigate to="/home" />} /> {/* Redirect root to /home */}
//             <Route path="/home" element={<ContentCreatorDashboard />} />
//             <Route path="/add-herb" element={<AddHerb />} />
//             <Route path="/my-herbs" element={<MyHerbs />} />
//             <Route path="/profile" element={<Profile />} />
//             <Route path="*" element={<div>404 - Page Not Found</div>} /> {/* Fallback route */}
//           </Routes>
//         </div>
//       </div>
//     </Router>
//     <Footer/>
  
//     </>
//   );
// };

// export default App;








// import React from "react";
// import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
// import Navigation from "./AdminDashboard/components/Navigation";
// import Dashboard from "./AdminDashboard/AdminPages/Dashboard";
// import Users from "./AdminDashboard/AdminPages/Users";
// import Logs from "./AdminDashboard/AdminPages/Logs";
// import Footer from './UserInterface/Components/Footer';

// function App() {
//   return (
//     <>
//       <Router>
//         <div className="min-h-screen bg-gray-100">
//           {/* Navigation Menu */}
//           <Navigation />

//           <div className="ml-64 p-6"> {/* Container for the main content */}
//             <Routes>
//               {/* Redirect root URL to Dashboard */}
//               <Route path="/" element={<Navigate to="/dashboard" />} />
              
//               {/* Define other routes */}
//               <Route path="/dashboard" element={<Dashboard />} />
//               <Route path="/users" element={<Users />} />
//               <Route path="/logs" element={<Logs />} />
//               {/* Fallback route */}
//               <Route path="*" element={<div>404 - Page Not Found</div>} />
//             </Routes>
//           </div>
//         </div>
//       </Router>
//       <Footer />
//     </>
//   );
// }

// export default App;




