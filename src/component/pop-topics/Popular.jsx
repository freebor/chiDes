import { PopTopicCard } from "./PopTopicCard"
import { popularTopicArray } from "../../utilities/mockData"

export const Popular = () => {
    const {popTopicTabs, popularTopicCard} = popularTopicArray
  return (
    <section>
        <h2>Popular topics</h2>
        <div>
            <ul>
                {popTopicTabs.map((tabs)=>{
                    return(
                        <li key={tabs.tab}><a href={tabs.href}>{tabs.tab}</a></li>
                    )
                })}
            </ul>
            <a href="#">View All</a>
        </div>
        <div>
            {popularTopicCard.map((content)=>{
                return(
                    <PopTopicCard 
                        key={content.image}
                        data={content}
                    />
                )
            })}
        </div>
    </section>
  )
}
