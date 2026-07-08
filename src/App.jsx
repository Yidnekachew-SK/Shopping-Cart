import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import Controller from "./Components/controller.jsx";
import HomePage from "./Components/homepage.jsx";
import ShopPage from "./Components/shopPage.jsx";
import CartPage from "./Components/cartPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Controller />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/shop", element: <ShopPage /> },
      { path: "/cart", element: <CartPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

