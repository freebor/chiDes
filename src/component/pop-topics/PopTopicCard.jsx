import { popularTopicArray } from "../../utilities/mockData"

export const PopTopicCard = ({data}) => {
    const {popularTopicCard} = popularTopicArray
  return (
    <div>
        <div>
           {popularTopicCard.image} 
           <p>{popularTopicCard.imageInnerText}</p>
        </div>
        <p>{popularTopicCard.cardDate}</p>
        <h3>{popularTopicCard.cardHeader}</h3>
        <p>{popularTopicCard.cardText}</p>
    </div>
  )
}
