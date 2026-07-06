import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import Controller from "./Components/controller";
import HomePage from "./Components/homePage";
import ShopPage from "./Components/shopPage";
import CartPage from "./Components/cartPage";

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

