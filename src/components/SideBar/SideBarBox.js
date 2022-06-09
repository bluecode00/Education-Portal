import React from 'react'
import classes from './SideBarBox.module.css';

import SideBardCard from './SideBardCard';

function SideBarBox() {
  return (
    <div className={classes.container}>
      <SideBardCard/>
    </div>
  )
}

export default SideBarBox