import { Link } from "react-router";

import type { RouteInfoType } from "@/features/utils/routeUtils";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGear } from "@fortawesome/free-solid-svg-icons";

import "@/features/styles/sidebar.css";

interface SidebarProps {
  permissions: readonly RouteInfoType[];
  variant: 'ACCOUNT' | 'DASHBOARD';
}

export const SideBar = ({ permissions, variant }: SidebarProps) => {
  return (
    <aside className={`sidebar sidebar--${ variant }`}>
      <div className="sidebar__brand">
        <FontAwesomeIcon 
          className="sidebar__brand-icon" 
          icon={ faUserGear } 
        />
        <span className="sidebar__brand-text">{ variant }</span>
      </div>

      <nav className="sidebar__nav">
        <ul className="sidebar__list">
          {permissions.map( (perm) => (
            <li key={ perm.key } className="sidebar__item">
              <Link to={ perm.path } className="sidebar__link">
                { perm.icon && (
                  <FontAwesomeIcon 
                    className="sidebar__icon" 
                    icon={ perm.icon } 
                  />
                )}
                <span className="sidebar__label">{ perm.name }</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

// const routes = getPermissionsByRole(userRole);

// <SideBar permissions={routes} typeSide="DASHBOARD" />