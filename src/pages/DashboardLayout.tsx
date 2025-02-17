import CustomSidebar from "@/components/CustomSidebar";
import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-1">
        <aside className="w-64">
          <CustomSidebar />
        </aside>

        <main className="flex-1 p-6 sidebar-height overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
