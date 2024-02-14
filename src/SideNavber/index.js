import React, { useState } from 'react';
import './index.css'

function SideNavber() {
  const [userType, setUserType] = useState('1'); // Set user type dynamically

  return (
    <div className="left side-menu" data-aos="fade-up-right">
      <div className="sidebar-inner slimscrollleft">

        {/* Sidemenu */}
        <div id="sidebar-menu">
          <ul>
            <li className="menu-title">Navigation</li>

            <li className="has_sub">
              <a href="dashboard.php" className="waves-effect"><i className="mdi mdi-view-dashboard"></i> <span> Dashboard
                </span> </a>
            </li>

            {userType === '1' && (
              <li className="has_sub">
                <a href="javascript:void(0);" className="waves-effect"><i className="mdi mdi-format-list-bulleted"></i>
                  <span> Sub-admins </span> <span className="menu-arrow"></span></a>
                <ul className="list-unstyled">
                  <li><a href="add-subadmins.php">Add Sub-admin</a></li>
                  <li><a href="manage-subadmins.php">Manage Sub-admin</a></li>
                </ul>
              </li>
            )}

            <li className="has_sub">
              <a href="javascript:void(0);" className="waves-effect"><i className="mdi mdi-format-list-bulleted"></i>
                <span> Category </span> <span className="menu-arrow"></span></a>
              <ul className="list-unstyled">
                <li><a href="add-category.php">Add Category</a></li>
                <li><a href="manage-categories.php">Manage Category</a></li>
              </ul>
            </li>

            {/* Add other menu items here */}

          </ul>
        </div>
        {/* Sidebar */}
        <div className="clearfix"></div>

      </div>
      {/* Sidebar -left */}
    </div>
  );
}

export default SideNavber;
