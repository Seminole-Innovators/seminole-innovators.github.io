// layout.tsx
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import StarField from "./StarField"; // Ensure this is the correct path to your StarField component

const Layout = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* The background component comes first so it's at the back */}
      <StarField />
      
      {/* This container will hold your foreground content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;