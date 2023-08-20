import { CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import { theme } from "./theme/theme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <CssBaseline />
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  );
};

export default App;
