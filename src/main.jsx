import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Root";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AuthProvider from "./AuthProvider";
import Dashboard from "./pages/dashboard/Dashboard";
import AddTodo from "./pages/dashboard/AddTodo";

const router = createBrowserRouter([
  {
    path: "/", element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: '/register', element: <Register /> },
      { path: '/login', element: <Login /> },
      {
        path: '/dashboard', element: <Dashboard />,
        children: [
          { index: true, element: <AddTodo /> }
        ]
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider> <RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>
);