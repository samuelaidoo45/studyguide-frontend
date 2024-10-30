import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Star, List, Settings } from 'lucide-react';
import styled from 'styled-components';
import Avatar from './Avatar';

const SidebarHeadProfileContainer = styled.div`
  height: 14vh;
  width: 100%;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Sidebar() {
  return (
    <aside className="sidebar">
      <SidebarHeadProfileContainer>
        <h2 className="logo">Studyguide</h2>
        <Avatar />
      </SidebarHeadProfileContainer>
      <ul>
        <li className='btn-container'>
          <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'active-link' : 'menu-link')}>
            <Home className='icon' /> Dashboard
          </NavLink>
        </li>
        <li className='btn-container'>
          <NavLink to="/favorites" className={({ isActive }) => (isActive ? 'active-link' : 'menu-link')}>
            <Star className='icon' /> Favorites
          </NavLink>
        </li>
        <li className='btn-container'>
          <NavLink to="/my-study-guides" className={({ isActive }) => (isActive ? 'active-link' : 'menu-link')}>
            <List className='icon' /> My Study Guides
          </NavLink>
        </li>
        <li className='btn-container'>
          <NavLink to="/settings" className={({ isActive }) => (isActive ? 'active-link' : 'menu-link')}>
            <Settings className='icon' /> Settings
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
