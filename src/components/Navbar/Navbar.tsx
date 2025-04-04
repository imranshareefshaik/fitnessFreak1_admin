"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './Navbar.css';
import logo from './logo.png';


const Navbar = () => {
    const [isAdmininAuthenticated, setIsAdminAuthenticated] = useState(false);
  return (

    <div className='navbar'>
        <Image src={logo} alt="Logo" width={100} className='logo' />
        <div className='adminlinks'>
            {isAdmininAuthenticated ? (
                <>
                   <Link href='/pages/addworkout'>Add Workout</Link>
                </>
            ) : (
                <>
                 <Link href='/adminauth/login'>Login</Link>
                 <Link href='/adminauth/register'>Signup</Link>

                </>
            )}
        </div>
      
    </div>
  )
}

export default Navbar
