import ToggleDarkMode from "@/components/ToggleDarkMode";
import { Button } from "@/components/ui/button";

const DashboardLayout = () => {
  return (
    <div>
      <h1>Dashboard Layout</h1>
      <Button>Dashboard</Button>
      <ToggleDarkMode />
    </div>
  );
};

export default DashboardLayout;
