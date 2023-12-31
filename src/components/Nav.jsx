// import { Web3Button } from '@thirdweb-dev/react'
// import { hamburger } from '../assets/icons'
import { headerLogo } from '../assets/images'
// import {hamburger} from '../assets/icons'
import { navLinks } from '../constants'
import { useState } from 'react'
import { ConnectWallet } from "@thirdweb-dev/react";
import { darkTheme, lightTheme } from "@thirdweb-dev/react";

const Nav = () => {

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };


  const customlightTheme = lightTheme({
    fontFamily: "Inter, sans-serif",
    colors: {
      // modalBg: "#000000",
      // accentText: "red",
      // ... etc
    },
  });


  return (
    <div>

      <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'><a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>

          <ul className='flex-1 flex justify-center max-lg:hidden'>
            {navLinks.map((items) =>
            (
              <li key={items.label}>
                <a href={items.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray px-[15px] "
                >
                  {items.label}
                </a>
              </li>
            )
            )}


          </ul>




          <div className=' relative lg:right-14' >
            {/* <button className=' shadow-lg bg-red-400 py-3 px-7 text-white-400 font-montserrat rounded-full hover:bg-white-400 hover:text-black   '> */}
              {/* Login */}
              <ConnectWallet btnTitle="Login" theme={customlightTheme} />
            {/* </button> */}
          </div>



   {/* <Web3Button/> */}

          <div className='hidden max-lg:block'>
           <a onClick={toggleMobileNav} > 
           {/* <img src={hamburger} alt="Hamburger" width={25} height={25} /> */}
           
           </a>
          </div>

        </nav>
      </header>
    </div>
  )
}

export default Nav