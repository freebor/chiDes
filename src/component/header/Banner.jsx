import { classNames } from "../../utilities/function.js"


export const Banner = ({image, headTag, subText, header, position, dateDisplay, subTextDirect}) => {
  return (
    <div className="relative text-white h-44 md:h-auto">
        <img src={image} alt="img" />
        <div className={classNames( position ? position : "", "bg-navTransparentBg-30 px-[2.3rem] md:px-[4.3rem] absolute top-0 flex justify-center h-full w-full flex-col left-0 text-s gap-[0.94rem] md:pt-4")}>
            <h5 className="text-[0.625rem] bg-navTransparentBg-20 w-fit px-[0.625rem] py-[0.3125rem] rounded-lg font-bold">{headTag}</h5>
            <h2 className="font-bold text-[1.125rem] md:w-[33.125rem] md:text-[2rem] lg:text-[2.25rem] text-white">{header}</h2>
            <div className={classNames(subTextDirect ? subTextDirect : "", "hidden md:flex gap-2 items-start md:w-[33.125rem] text-xs text-grayText-10")}>
                <div className={classNames(dateDisplay ? dateDisplay: "", "flex items-center flex-row gap-2")}>
                    <p>08.08.2021</p>
                    <hr className="bg-grayText-10 w-5"/>
                </div>
                <p>{subText}</p>
            </div>
        </div>
    </div>
    )
}
