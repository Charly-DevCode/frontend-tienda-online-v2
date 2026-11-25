import { NavLink } from 'react-router';

import { getPermissionsByRole } from '@/features/utils/routeUtils';
import type { RoleUser } from '@/features/interfaces/user.base.dto';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCircleUser, 
  faUserGear 
} from '@fortawesome/free-solid-svg-icons';

import '@/features/styles/sidebar.css';


interface SidebarProps {
  role: RoleUser;  
}

export const SideBar = ({ role }: SidebarProps) => {
  const isClient = role==='client'  
  const brandIcon = isClient ? faCircleUser : faUserGear;
  const brandText = isClient ? 'Menú de usuario' : 'Panel Administrativo';
  const variant = isClient ? 'ACCOUNT' : 'DASHBOARD';

  const permissions = getPermissionsByRole(role);

  return (
    <aside className={`sidebar sidebar--${variant}`}>
      <div className='sidebar__brand'>
        <FontAwesomeIcon
          className='sidebar__brand-icon'
          icon={brandIcon}
        />
        <span className='sidebar__brand-text'>{brandText}</span>
      </div>

      <nav className='sidebar__nav' aria-label={brandText}>
        <ul className='sidebar__list'>
          {permissions.map((perm) => (
            <li key={perm.key} className='sidebar__item'>
              <NavLink
                to={perm.path}
                end={perm.path === '/' || perm.path === '/admin'}
                className={({ isActive }) =>
                  `sidebar__link ${isActive ? 'sidebar__link--active' : ''}`
                }
              >
                {perm.icon && (
                  <FontAwesomeIcon
                    className='sidebar__icon'
                    icon={perm.icon}
                  />
                )}
                <span className='sidebar__label'>{perm.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

// const routes = getPermissionsByRole(userRole);

// <SideBar permissions={routes} typeSide='DASHBOARD' />