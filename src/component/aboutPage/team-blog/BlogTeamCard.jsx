import {classNames} from "../../../utilities/function"
export const BlogTeamCard = ({ blogTeamProp, index }) => {
    const {image, header, subText, text} = blogTeamProp
  return (
    <div className="flex flex-col gap-10 lg:grid grid-cols-2">
        <div className={classNames(index % 2 === 0 ? "lg:order-1" : "lg:order-2", "flex flex-col justify-center gap-4")}>
            <h2 className="font-bold text-[1.875rem]  md:text-[2rem] lg:text-[1.5rem]">{header}</h2>
            <h5 className="font-bold text-[1.2rem] md:text-[1.75rem] lg:text-[1.25rem]">{subText}</h5>
            <p className="text-[0.87rem]">{text}</p>
        </div>
        <div className={classNames(index % 2 === 0 ? "lg:order-2" : "lg:order-1")}>
            <img className="brightness-75" src={image} alt="img" />
        </div>
    </div>
  )
}
