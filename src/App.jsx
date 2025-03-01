import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Footer from "./shared/Footer";
import Header from "./shared/Header";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  useEffect(() => {
    console.log(isSidebarOpen);
  }, [isSidebarOpen]);
  return (
    <div className="flex h-screen bg-[#EFF3F9] w-screen md:overflow-x-hidden">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <div className="flex-1 flex flex-col">
        <Header
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        {/* main content */}
        <main className="flex-1 overflow-auto p-4 container mx-auto mt-1">
          main
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
