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
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Edit from "./pages/dashboard/Edit";
const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/", element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: '/register', element: <Register /> },
      { path: '/login', element: <Login /> },
      { path: '/contact', element: <Contact /> },
      { path: '/pricing', element: <Pricing /> },
      { path: '/about', element: <About /> },

      {
        path: '/dashboard', element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
          { index: true, element: <AddTodo /> },
          { path: '/dashboard/todo', element: <Todo /> },
          { path: '/dashboard/ongoing', element: <Ongoing /> },
          { path: '/dashboard/completed', element: <Completed /> },
          { path: `/dashboard/edit/:id`, element: <Edit />, loader: ({ params }) => fetch(`https://job-task-1-server-sable.vercel.app/edit/${params.id}`) }
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