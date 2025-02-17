import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, User, Settings, HelpCircle, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";

const CustomDropDown = () => {
  return (
    <div className="sm:hidden lg:block">
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
  );
};

export default CustomDropDown;
