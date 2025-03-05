import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import sidebarItems from "@/utils/sidebarItems";
import { NavLink } from "react-router-dom";

// Menu items.

const CustomSidebar = () => {
  return (
    <SidebarProvider>
      <Sidebar className="sidebar-height">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent className="mt-6 ">
              <SidebarMenu>
                {sidebarItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          `text-[20px] py-8 ps-12 ${
                            isActive
                              ? "text-[#9781FA] !important"
                              : "hover:text-[#9781FA]"
                          }`
                        }
                      >
                        <item.icon />
                        <span>{item.title}</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
};
export default CustomSidebar;
