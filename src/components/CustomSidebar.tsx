import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import sidebarItems from "@/utils/sidebarItems";

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
                      <a
                        href={item.path}
                        className="hover:text-[#9781FA] text-[20px]  py-8 ps-12"
                      >
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
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
