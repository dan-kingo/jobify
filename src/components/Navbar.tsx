import { ChevronDown } from "lucide-react";
import logo from "../assets/images/logo-cropped.svg";
import ToggleDarkMode from "./ToggleDarkMode";
import { Button } from "./ui/button";
const Navbar = () => {
  return (
    <div className=" shadow-md dark:shadow-gray-900 py-2 px-14 border-b-2">
      <div className="flex justify-between items-center">
        <img src={logo} alt="logo image" className="w-32" />
        <div className="flex items-center gap-4">
          <ToggleDarkMode />
          <Button
            variant="outline"
            className="bg-[#9781FA] text-white hover:opacity-85"
          >
            Dan
            <ChevronDown />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
