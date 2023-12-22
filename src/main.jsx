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
import Todo from "./pages/dashboard/Todo";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Ongoing from "./pages/dashboard/Ongoing";
import Completed from "./pages/dashboard/Completed";
import PrivateRoute from "./PrivateRoute";
import Contact from "./pages/Contact";
const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/", element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: '/register', element: <Register /> },
      { path: '/login', element: <Login /> },
      { path: '/contact', element: <Contact /> },
      {
        path: '/dashboard', element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
          { index: true, element: <AddTodo /> },
          { path: '/dashboard/todo', element: <Todo /> },
          { path: '/dashboard/ongoing', element: <Ongoing /> },
          { path: '/dashboard/completed', element: <Completed /> }
        ]
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider> <RouterProvider router={router} /></AuthProvider>
    </QueryClientProvider>

  </React.StrictMode>
);