export const PopTopicCard = ({data}) => {
  const {image, imageInnerText, cardDate, cardHeader, cardText} = data
  return (
    <div className="flex md:w-[17.375rem] w-[19.375rem] flex-col gap-[0.94rem] justify-center">
        <div className="md:h-[16.5rem] h-[17.5rem] relative">
           <img src={image} alt="" /> 
           <p className="absolute top-[1.25rem] right-[1.25rem] text-[0.625rem] bg-navTransparentBg-20 w-fit px-[0.625rem] py-[0.3125rem] rounded-lg font-bold text-white">{imageInnerText}</p>
        </div>
        <p className="text-grayText2 text-xs">{cardDate}</p>
        <h3 className="text-lg text-darkText font-bold">{cardHeader}</h3>
        <p className="text-xs text-grayText-20 font-bold">{cardText}</p>
    </div>
  )
}
