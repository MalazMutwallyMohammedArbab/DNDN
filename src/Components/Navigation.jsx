import React, { useState } from 'react'
import NavigationMenu from './NavigationMenu';
import Image from "./Images";
  

function Navigation(){
    const [showMenu, setShowMenu] = useState(false)

    let menu
    let menuMask
    if (showMenu){
      menu = <div className='fixed bg-[#FFFFE0] top-0 right-0 w-3/5 lg:w-2/5 h-full z-50 shadow'><NavigationMenu /></div>

      menuMask = <div className='fixed top-0 left-0 w-full h-full z-50' onClick={() => setShowMenu(false)}></div>
    }

    return (
        <nav>
            <span className="text-xl">
              <Image src="images/icon-hamburger.svg" alt='hamp' className='cursor-pointer w-9' onClick={() => setShowMenu(!showMenu)} />
            </span>

            {menuMask}
            {menu}
        </nav>
    )
}

export default Navigation;
