export const EditorCard = ({ editData }) => {
    const {image, imageInnerText, cardDate, cardHeader, cardText} = editData
  return (
    <div className="flex justify-center flex-wrap">
        <div className="relative w-[95%] md:w-[23.25rem]">
            <img src={image} alt="" />
            <div className="absolute top-0 left-0 flex flex-col justify-between w-full h-full bg-navTransparentBg-10">
                <div className="flex justify-end p-5">
                    <p className="text-[0.625rem] bg-navTransparentBg-20 w-fit px-[0.625rem] py-[0.3125rem] rounded-lg font-bold text-white">{imageInnerText}</p>
                </div>
                <div className="px-5 pb-[2rem] md:pb-[2.65rem] flex flex-col gap-[0.64rem]">
                    <p className="text-textWhite-20 text-xs">{cardDate}</p>
                    <h3 className="text-[1.125rem] text-white font-bold">{cardHeader}</h3>
                    <p className="text-xs text-textWhite-20 font-bold">{cardText}</p>
                </div>                            
            </div>
        </div>        
    </div>
  )
}
