interface BBProps {
  bbClickHandler: () => void
  isMenuOpen: boolean
}

export default function BurgerButton({ bbClickHandler, isMenuOpen }:BBProps) {
  return (
    <div className={`flex flex-col w-5 absolute z-10 right-6 top-6 scale-150 group cursor-pointer sm:hidden ${isMenuOpen?'gap-0':'gap-[3px]'}`}  onClick={bbClickHandler} >
      <span className={`transition-transform duration-300 bg-gray-200 w-5 h-1 ${isMenuOpen&&'bg-white rotate-45 translate-y-[2px]'}`}></span>
      <span className={`transition-transform duration-300 bg-gray-200 w-5 h-1 group-hover:bg-red-200 ${isMenuOpen&&'hidden'}`}></span>
      <span className={`transition-transform duration-300 bg-gray-200 w-5 h-1 ${isMenuOpen&&'bg-white -rotate-45 -translate-y-[2px]'}`}></span>
    </div>
  )
}
