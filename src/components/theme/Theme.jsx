import { faCog, faMoon, faSun, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { theme as themeData } from '../../Data'
import ThemeItem from './ThemeItem';
import './theme.css';
import { useEffect, useState } from 'react';

const getStoregeColor = () => {
  let color = '#8a2ce2';
  if (localStorage.getItem('color')) {
    color = localStorage.getItem('color');
  };

  return color;
}
const getStoregeTheme = () => {
  let theme = 'light-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  };

  return theme;
}

const Theme = () => {
  const [showSwitcher, setShowSwitcher] = useState(false);
  const [color, setColor] = useState(getStoregeColor());
  const [theme, setTheme] = useState(getStoregeTheme());

  const changeColor = (color) => setColor(color);

  const toggleTheme = () => {
    if (theme == 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  }

  useEffect(() => {
    document.documentElement.style.setProperty('--firstColor', color);
    localStorage.setItem('color', color);
  }, [color]);
  
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div>
      <div className={`${showSwitcher ? 'show-switcher' : ''} style__switcher`}>
        <div className="style__switcher-toggler" onClick={() => setShowSwitcher(prev => !prev)} >
          <FontAwesomeIcon icon={faCog} />
        </div>

        <div className="theme__toggler" onClick={toggleTheme}>
          <FontAwesomeIcon icon={theme == 'light-theme' ? faMoon : faSun} />
        </div>
        <div className="style__switcher-close" onClick={() => setShowSwitcher(prev => !prev)} >
          <FontAwesomeIcon icon={faXmark} />
        </div>

        <h3 className='style__switcher-title'>Style Switcher</h3>
        <div className='style__switcher-items'>
          {themeData.map(({ color, id }) => (<ThemeItem key={id} item={color} changeColor={changeColor} setShowSwitcher={setShowSwitcher}/>))}
        </div>

      </div>
    </div>
  )
}

export default Theme