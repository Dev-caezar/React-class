import React from "react";
import { Footer, Header } from "../static";
import { Outlet } from "react-router";

const HomeLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
