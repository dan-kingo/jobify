import { ChevronDown, HelpCircle, LogOut, Settings, User } from "lucide-react";
import logo from "../assets/images/logo-cropped.svg";
import ToggleDarkMode from "./ToggleDarkMode";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import CustomButton from "./CustomButton";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className=" shadow-md dark:shadow-gray-900 py-2 px-14 border-b-2 fixed top-0 w-full">
      <div className="flex justify-between items-center">
        <img src={logo} alt="logo image" className="w-32" />
        <div className="flex items-center gap-4">
          <ToggleDarkMode />

          <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none">
              <CustomButton>
                <Avatar className="w-6 h-6">
                  <AvatarImage
                    src="https://plus.unsplash.com/premium_photo-1664533227571-cb18551cac82?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="@shadcn"
                  />
                  <AvatarFallback>DN</AvatarFallback>
                </Avatar>{" "}
                {"  "}
                Dan
                <ChevronDown size="16px" />
              </CustomButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User />
                <Link to="/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings />
                <Link to="/">Settings & Privacy</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <HelpCircle />
                <Link to="/">Help & Support</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LogOut />
                <Link to="/">Logout</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
