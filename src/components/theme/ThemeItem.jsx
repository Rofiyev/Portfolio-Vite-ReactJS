import React from 'react';

const ThemeItem = ({ item, changeColor, setShowSwitcher }) => {
  return (
    <div className='circle-box' style={{ backgroundColor: item }} onClick={() => {changeColor(item); setShowSwitcher(prev => !prev)}}></div>
  )
}

export default ThemeItem