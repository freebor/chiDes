import { DescriptionCard } from "./DescriptionCard"
import { aboutDescription } from "../../../utilities/mockData"

export const AboutDescribe = () => {
  return (
    <section className="flex justify-center">
        <div className="flex flex-col md:flex-row gap-8 md:gap-5 lg:gap-8 xl:gap-[6rem] py-16 my-16 justify-center w-[90%] md:w-[96%] lg:w-fit px-6 md:px-16 bg-[#F4F0F8] rounded-[0.3rem]">
            {aboutDescription.map((describe, i) =>{
                return(
                    <DescriptionCard 
                        key={i}
                        describeData={describe}
                    />
                )
            })}
        </div>
    </section>
  )
}
