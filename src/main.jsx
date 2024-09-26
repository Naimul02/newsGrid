import * as React from "react";
// import * as ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import router from "./Route/Route.jsx";
import AuthProvider from "./Components/Fairbase/AuthProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <React.StrictMode>

      <QueryClientProvider client={queryClient}>
    <AuthProvider>

      <RouterProvider router={router} />

      <Toaster />
    </AuthProvider>
      </QueryClientProvider>

  </React.StrictMode>
);
