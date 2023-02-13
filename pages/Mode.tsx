import * as React from 'react';
import { useState } from 'react';

import { DarkModeSwitch } from 'react-toggle-dark-mode';


export default function Mode() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  function toogleDarkMode(checked: boolean) {
    setIsDarkMode(checked);
  }

  return (
    <DarkModeSwitch
      checked={isDarkMode}
      onChange={toogleDarkMode}
      size={35}
    />
  );
}