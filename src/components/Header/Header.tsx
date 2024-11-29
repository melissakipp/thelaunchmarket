'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiBars3, HiXMark } from 'react-icons/hi2';
import './Header.css';
import Logo from '@/src/assets/the-launch-market_small-logo.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [isMenuOpen]);

  return (
    <header className='header'>
      <div className='container'>
        <Link href='/' className='logo' aria-label='Home'>
          <Image src={Logo} alt='Logo' width={125} height={125} />
        </Link>

        <div className='navContainer'>
          <button 
            className='menuButton'
            onClick={() => setIsMenuOpen(true)}
            aria-expanded={isMenuOpen}
            aria-controls='navigation'
          >
            <HiBars3 className='menuIcon' />
            <span className='srOnly'>Menu</span>
          </button>

          <nav 
            id='navigation'
            className={`${'nav'} ${isMenuOpen ? 'navOpen' : ''}`}
          >
            <div className='navHeader'>
              <button
                className='closeButton'
                onClick={() => setIsMenuOpen(false)}
              >
                <HiXMark className='closeIcon' />
                <span className='srOnly'>Close menu</span>
              </button>
            </div>

            <ul className='menu'>
              {['Home', 'Services', 'Contact'].map((item) => (
                <li key={item} className='menuItem'>
                  <Link
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className='menuLink'
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;