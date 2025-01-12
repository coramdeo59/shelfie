'use client'
import { useState } from 'react';
import Navbar from './components/common/navBar';  // Path to NavBar component
import { ProfileDetail } from './components/common/profileDetail';
import './globals.css';



export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [showProfile, setShowProfile] = useState(false);

  const handleProfileClick = () => {
    setShowProfile(prev => !prev); 

  };

  return (
    <html lang="en">
      <body>
        <Navbar showProfile={handleProfileClick} />  
          {showProfile && <ProfileDetail/>}
        <main>
          {children}
        </main>  
      </body>
    </html>
  );
}
