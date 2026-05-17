import React from "react";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/Router";
// import Home from "./pages/home/Home";

const App: React.FC = () => {
  interface user {
    fullName: string;
    email: string;
    role: string;
    isverified: boolean;
  }
  const user = {
    fullName: "Anthony",
    email: "anthony@mail.com",
    role: "admin",
    isverified: false,
  };

  // return <Home data={user} name="caezar" />;
  return <RouterProvider router={routes} />;
};

export default App;
