'use client'

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function DarkMode() {
  
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div className='containerToggles'>
       <div className="flex justify-center">
            {currentTheme === 'dark' ? (
              <button
                className="toggle"
                onClick={() => setTheme('light')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
              </button>
            ) : (
              <button
                className="toggle"
                onClick={() => setTheme('dark')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
              </button>
            )}
          </div>
      <audio src='audio/light-on.mp3' className='themeAudio__lightOn' data-attribute='adapted from user 160033 file on freesound.org https://freesound.org/people/160033/sounds/366184/ under CC BY-NC 3.0'></audio>
      <audio src='audio/light-off.mp3' className='themeAudio__lightOff' data-attribute='adapted from user 160033 file on freesound.org https://freesound.org/people/160033/sounds/366184/ under CC BY-NC 3.0'></audio>
    </div>
  );
}
