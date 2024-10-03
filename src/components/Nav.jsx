import { useState } from "react"
import { BARS_ICON,CROSS_ICON } from "../icons/icons"


function Nav() {
  const [isOpen,setIsOpen] = useState(false)
  function togaleNabBar(){
    setIsOpen(!isOpen)
  }

  const phoneStyles = "absolute z-10 w-full bg-[rgba(0,0,0,0.6)] top-0 flex-col text-white"
  const desktopStyles = "lg:w-[550px] lg:bg-white lg:text-black lg:static lg:flex-row lg:justify-between "

  return (
    <div className="w-full fixed top-0 z-10 py-2 lg:px-16 flex justify-start lg:justify-between items-center">
      <BARS_ICON onClick={togaleNabBar} size={25} className="mx-3 lg:hidden"/>
      <h1 className="text-3xl">Portfolio</h1>
      <div className={`text-xl ${desktopStyles} ${phoneStyles} transition-all ease-in-out duration-700 p-5 flex gap-5 items-center ${isOpen ? "left-0" : "-left-[100%]"}`}>
          <CROSS_ICON size={25} onClick={togaleNabBar} className="absolute top-5 z-10 right-5 lg:hidden"/>
          {["Home","About","Skills","Projects","Contact Me"].map((item)=><h2 key={item} className="cursor-pointer">{item}</h2>)}
      </div>
    </div>
  )
}

export default Nav