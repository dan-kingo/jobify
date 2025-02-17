import { BarChart, Briefcase, PlusCircle, Settings, User } from "lucide-react";

const sidebarItems = [
  {
    title: "Add Job",
    path: "/add-job",
    icon: PlusCircle,
  },
  {
    title: "All Jobs",
    path: "/all-jobs",
    icon: Briefcase,
  },
  {
    title: "Stats",
    path: "/stats",
    icon: BarChart,
  },
  {
    title: "Profile",
    path: "/profile",
    icon: User,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

export default sidebarItems;
