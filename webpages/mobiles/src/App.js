import React from "react";
import PageProduct from "./components/PageProduct";
// import PageNotFound from "./pages/PageNotFound";
import EmptyContainer from "./components/Plug/Plug";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageProduct />,
    // errorElement: <PageNotFound />,
  },
  {
    path: "/leer",
    element: <EmptyContainer />,
  }
],
{ basename: '/practising/webpages/mobiles'}
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
