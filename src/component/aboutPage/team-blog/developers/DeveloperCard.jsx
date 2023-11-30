import { classNames } from "../../../../utilities/function";

export const DeveloperCard = ({devData}) => {
    const { image, header, subText, social, colorChange } = devData;
  return (
    <div className={classNames(colorChange ? "bg-LightYellow" : "bg-LightGrey", "flex flex-col justify-center items-center py-16 gap-5 md:w-[27rem]")}>
        <div className="w-[13rem] h-[13rem] ">
            <img src={image} alt="" className="rounded-full"/>
        </div>
        <h2 className="font-bold text-[1.75rem]">{header}</h2>
        <p className="text-[0.875rem] text-grayText-30">{subText}</p>
        <ul className="flex gap-6">
            {social.map((mappedIcon, i)=>{
                return(
                    <li key={i}><a href={mappedIcon.href} className="text-[1.3rem]"><mappedIcon.navIcon></mappedIcon.navIcon></a></li>
                )
            })}
        </ul>
    </div>
  )
}
