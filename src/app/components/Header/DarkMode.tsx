import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function DarkMode() {
  
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className='containerToggles'>
      <label className='srOnly' htmlFor='theme-mode'>Choose a theme:</label>
      <select id='theme-mode' value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value='system'>System</option>
        <option value='light'>Light</option>
        <option value='dark'>Dark</option>
      </select>

      <audio src='audio/light-on.mp3' className='themeAudio__lightOn' data-attribute='adapted from user 160033 file on freesound.org https://freesound.org/people/160033/sounds/366184/ under CC BY-NC 3.0'></audio>
      <audio src='audio/light-off.mp3' className='themeAudio__lightOff' data-attribute='adapted from user 160033 file on freesound.org https://freesound.org/people/160033/sounds/366184/ under CC BY-NC 3.0'></audio>
    </div>
  );
}
