// router.jsx
import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/layout";
import App from "./routes/App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Wrap with Navbar
    children: [{ path: "/", element: <App /> }],
  },
]);
