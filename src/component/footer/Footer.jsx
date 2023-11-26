import { footerArray } from "../../utilities/mockData"
import { FooterCard } from "./FooterCard"
import { SubFooter } from "./SubFooter"
import { FaFacebook, FaTwitter, FaYoutube, FaPinterest, FaSquareBehance } from "react-icons/fa6";

const footerSocial = {
    footerHead: "Connections",
    footSocial:[
        {social: FaFacebook, href: "#"},
        {social: FaTwitter , href: "#"},
        {social: FaYoutube, href: "#"},
        {social: FaPinterest, href: "#"},
        {social: FaSquareBehance , href: "#"},
    ]
}

export const Footer = () => {
    const {footerHead, footSocial} = footerSocial
  return (
    <section className="w-full bg-footerBg-20 pt-20 text-white">
        <div className="flex flex-col gap-20 ">
            <div className="flex w-[85%] md:w-[90%] m-auto flex-wrap flex-col md:flex-row gap-6 justify-center md:justify-between md:items-start">
                {footerArray.map((footLink, i)=>{
                    return(
                        <FooterCard 
                            key={i}
                            data={footLink}
                        />
                    )
                })}
                <div className="flex flex-col gap-[0.94rem]">
                    <h4 className="text-lg font-bold">{footerHead}</h4>
                    <ul className="flex gap-3">
                        {footSocial.map((footMap, i)=> (
                            <li key={i}><a href={footMap.href}><footMap.social /></a></li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="flex items-end ">
                <SubFooter />
            </div>
        </div>
    </section>
  )
}

