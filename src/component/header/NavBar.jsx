import { useState } from "react"
import { navItemArray, navIcons} from "../../utilities/mockData"
import { FaBars } from "react-icons/fa"
import { IoSearch } from "react-icons/io5";
import { classNames } from "../../utilities/function"

export const NavBar = () => {
    const [active, setActive] = useState(false)
  return (
    <div className="md:fixed z-10 flex flex-col md:flex-row justify-between w-full bg-darkText md:bg-navTransparentBg-10 px-[2.37rem] md:px-[4.37rem] py-[1.21rem] md:py-[0.81rem] border-current items-center">
        <div className="flex justify-between w-full md:w-auto">
            <h2 className="text-textWhite-10 text-lg font-bold">RUNO</h2>
            <button className="md:hidden" onClick={()=> setActive(!active)}>
                <FaBars />
            </button>
        </div>
        <nav className={classNames(active ? 'flex' : "hidden", "md:items-center md:gap-3 md:flex md:flex-row m-6 divide-x-2 divide-grayText-10 flex-col items-center")}>
            <ul className="flex gap-3 flex-col md:flex-row pb-2 md:pb-0">
                {navItemArray.map((nav)=>{
                    return(
                        <li className="text-textWhite-20 font-bold text-xs" key={nav.tab}><a href={nav.href} className={classNames(nav.isActive ? "border-b-2 border-b-orangeText" : "")}>{nav.tab}</a></li>
                    )
                })}
            </ul>

            <ul className="md:flex md:pl-3 gap-3 pt-2 md:pt-0 flex-col md:flex-row hidden">
                {navIcons.map((navIcons,i)=>{
                    return(
                        <li className="text-textWhite-20 font-bold text-xs" key={i}><a href={navIcons.href} ><navIcons.navIcon /></a></li>
                    )
                })}
            </ul>
            <div  className="text-textWhite-20 md:pl-3 hidden md:flex"><IoSearch/></div>
        </nav>
    </div>
  )
}
