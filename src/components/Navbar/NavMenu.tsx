import { useEffect, useState } from "react";
import BurgerButton from "./BurgerButton";
import NavItem from "./NavItem";



export default function Menu() {
  const [isMenuVisible, setIsOpacity0] = useState(false)
  const [isBackdropVisible, setIsMenuVisible] = useState(false)
  const [isBackdropPlaying, setIsBackdropPlaying] = useState(false)
  
  const [isPcSize, setIsPcSize] = useState<boolean>(false)
  const hasWindow = typeof window !== 'undefined';
  
  const windowSizeHandler = () => {
    if(hasWindow) {
      const winWidth = window.innerWidth
      if (winWidth > 640) {
        setIsPcSize(true)
      } else{
        setIsPcSize(false)
      }
    }
  }

  useEffect(() =>{
    windowSizeHandler()
    addEventListener("resize",windowSizeHandler)
    
    return () => removeEventListener("resize", windowSizeHandler)
     
    
  }, [])


  const showHideMenu = () => {
    if (isBackdropPlaying) {
      return
    }
    setIsBackdropPlaying(true)
    setIsOpacity0(prev => !prev)
    
    if (isMenuVisible) {
      setTimeout(() => {
        setIsMenuVisible(prev => !prev)
        setIsBackdropPlaying(false)
      }, 350);
    } else {
      setIsMenuVisible(prev => !prev)
      setIsBackdropPlaying(false)
    }
    
  }

  return (
    <>
      <BurgerButton bbClickHandler={showHideMenu} isMenuOpen={isMenuVisible} />
      
      {/* backdrop div below */}
      <div onClick={showHideMenu} className={`
      fixed top-0 left-0  h-full w-full 
      opacity-0 bg-gray-100
      transition-opacity
      duration-300
      
      ${isMenuVisible?'opacity-20 ':'opacity-0'}
      ${isBackdropVisible?'visible ':'invisible'} `} ></div>

      <nav className={`
      fixed top-0 left-0 w-[45%] min-w-[180px] bg-black h-screen p-5 
      opacity-90
      transition-transform
      duration-300
      z-20
      ${isMenuVisible?'translate-x-0':'-translate-x-full'}

      sm:transition-none sm:translate-x-0 sm:relative sm:w-auto sm:h-auto
      sm:bg-transparent sm:opacity-100
      `} >
        <ul className="space-y-3 sm:flex sm:justify-center sm:gap-5 sm:space-y-0" >
            <li><NavItem isPCSize={isPcSize} showHideMenu={showHideMenu} title='Home' href='/' /></li>
            <li><NavItem isPCSize={isPcSize} showHideMenu={showHideMenu} title='Projects' href='/projects' /></li>
            <li><NavItem isPCSize={isPcSize} showHideMenu={showHideMenu} title='About Me' href='/about_me' /></li>
            <li><NavItem isPCSize={isPcSize} showHideMenu={showHideMenu} title='Resume' href='/resume' /></li>
        </ul>
      </nav>
    </>
  )
}
