import { BarChart, Briefcase, PlusCircle, Settings, User } from "lucide-react";

const sidebarItems = [
  {
    title: "Add Job",
    path: "/dashboard/add-job",
    icon: PlusCircle,
  },
  {
    title: "All Jobs",
    path: "/dashboard/all-jobs",
    icon: Briefcase,
  },
  {
    title: "Stats",
    path: "",
    icon: BarChart,
  },
  {
    title: "Profile",
    path: "/dashboard/profile",
    icon: User,
  },
  {
    title: "Settings",
    path: "/dashboard/settings",
    icon: Settings,
  },
];

export default sidebarItems;
