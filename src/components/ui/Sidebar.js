import React from 'react';
import { Home, Star, List, Settings } from 'lucide-react';
import styled from 'styled-components';
//import {User} from 'lucide-react';
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
        <li className='btn-container'><Home className='icon' /> Dashboard</li>
        <li className='btn-container'><Star className='icon' /> Favorites</li>
        <li className='btn-container'><List className='icon' /> My Study Guides</li>
        <li className='btn-container'><Settings className='icon' /> Settings</li>
      </ul>
    </aside>
  );
}

export default Sidebar;
