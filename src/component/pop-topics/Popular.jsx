import { useState } from "react"
import { PopTopicCard } from "./PopTopicCard"
import { popularTopicArray } from "../../utilities/mockData"
import { classNames } from "../../utilities/function"


export const Popular = () => {
    const {popTopicTabs, popularTopicCard} = popularTopicArray
    const [selectedValue, setSelectedValue] = useState(false); 

    const handleDropdownChange = (event) => {
        // Update the selected value in the state
        setSelectedValue(event.target.value);
    };
  return (
    
    <section  className="flex justify-center">
        <div className="w-[85%] md:w-[92%] flex flex-col gap-[1.8rem] my-20">
            <h2 className="text-darkText font-bold text-[2.25rem]">Popular topics</h2>
            <div className="flex justify-between text-[0.875rem]">
                <select id="dropdown" className="md:hidden"  value={selectedValue} onChange={handleDropdownChange}>
                    {popTopicTabs.map((tabs, i)=>{
                        return(
                            <option key={i} value={tabs.value}>{tabs.popTab}</option>
                            )
                        })}
                </select>
                <ul id="dropdown" className="hidden md:flex gap-5" value={selectedValue} onChange={handleDropdownChange}>
                    {popTopicTabs.map((tabs, i)=>{
                        return(
                            <li key={i} value={tabs.value} className={classNames(tabs.isActive ? "text-orangeText" : "text-darkText", "font-bold")}><a href={tabs.href}>{tabs.popTab}</a></li>
                            )
                        })}
                </ul>
                <a href="#">View All</a>
            </div>
            {/* <p>Selected value: {selectedValue}</p> */}
            <div className="flex flex-wrap justify-center gap-x-[1.25rem] gap-y-14">
                {popularTopicCard.map((content, i)=>{
                    return(
                        <PopTopicCard key={i} data={content}/>
                    )
                })}
            </div>
        </div>
    </section>
  )
}
