import React, { useEffect, useState } from "react";
import BalanceHistory from "./components/BalanceHistory";
import Expense from "./components/Expense";
import QuickTransfer from "./components/QuickTransfer";
import RecentTransaction from "./components/RecentTransaction";
import Sidebar from "./components/Sidebar";
import SummaryCard from "./components/SummaryCard";
import SummaryTemp from "./components/SummaryTemp";
import WeeklyActivity from "./components/WeeklyActivity";
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 overflow-x-auto md:overflow-visible scroll-smooth snap-x snap-mandatory">
            <SummaryCard />
            <SummaryTemp />
            <RecentTransaction />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-7 my-4 justify-center items-center">
            <div className=" md:col-span-7">
              <WeeklyActivity />
            </div>
            <div className="md:col-span-5">
              <Expense />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[30px] my-4">
            <div className="col-span-4">
              <QuickTransfer />
            </div>
            <div className="col-span-8">
              <BalanceHistory />
            </div>
          </div>
        </main>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default App;
