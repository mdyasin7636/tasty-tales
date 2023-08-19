import { CssBaseline } from "@mui/material";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      }
    ]
  },
]);

const App = () => {
  return (
    <div>
      <CssBaseline />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
