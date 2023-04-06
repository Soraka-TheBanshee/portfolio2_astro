import { useEffect, useRef, useState } from "react"

interface NavItemProps {
    title: string
    href: string
    isPCSize: boolean
    showHideMenu: () => void
}





export default function NavItem({ title, href, isPCSize, showHideMenu }:NavItemProps) {
  const [linkClicker, setLinkClicker] = useState(false)
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      // start prefetch here <------------
      const timeoutID = setTimeout(() => window.open(href, "_self"), 350)
      
      return () => clearTimeout(timeoutID)
    }
  }, [linkClicker])


  
  const linkClickHandler = () => {
    showHideMenu()
    setLinkClicker(prev => !prev)
  }
  

  return (
    <>
      {isPCSize
      ?
      <a className="text-3xl hover:underline hover:text-red-100" href={href}>{title}</a>
      :
      <button
      className="text-3xl hover:underline hover:text-red-100"
        onClick={linkClickHandler}
      >{title}</button>
    }
    </>
  )
}
