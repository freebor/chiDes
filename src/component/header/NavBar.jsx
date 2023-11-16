import { navItemArray } from "../../utilities/mockData"

export const NavBar = () => {
  return (
    <div>
        <div className="logo">RUNO</div>
        <nav>
            <ul>
                {navItemArray.map((nav)=>{
                    return(
                        <li key={nav.tab}><a href={nav.href}>{nav.tab}</a></li>
                    )
                })}
            </ul>
        </nav>
    </div>
  )
}
