import { useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import useDarkSide from '../utils/useDarkSide';

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === 'light' ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <>
      <DarkModeSwitch
        className="absolute top-5 lg:top-12 right-16 lg:right-5"
        checked={darkSide}
        onChange={toggleDarkMode}
        size={30}
      />
    </>
  );
}
