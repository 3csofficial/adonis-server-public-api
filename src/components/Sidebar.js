import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent  } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

const Sidebar = () => {
  return (
    <div>
			<ProSidebar>
			  <SidebarHeader>
			    sidebar
			  </SidebarHeader>
			  <SidebarContent>
			    <Menu iconShape="square">
			    <MenuItem >Dashboard</MenuItem>
			    <SubMenu title="Components" >
			      <MenuItem>Component 1</MenuItem>
			      <MenuItem>Component 2</MenuItem>
			    </SubMenu>
			  </Menu>
			  </SidebarContent>
			  <SidebarFooter>
			    footer
			  </SidebarFooter>
			</ProSidebar>
    </div>
  );
};

export default Sidebar;
