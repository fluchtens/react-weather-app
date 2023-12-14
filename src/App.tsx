import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import Error from "./components/pages/Error";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
