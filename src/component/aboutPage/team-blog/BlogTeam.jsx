import { BlogTeamCard } from "./BlogTeamCard"
import { blogTeamArray } from "../../../utilities/mockData"

export const BlogTeam = () => {
  return (
    <section className="flex justify-center">
        <div className="flex flex-col gap-16 my-6 w-[90%]">
            {blogTeamArray.map((blogMap, i)=>(
                <BlogTeamCard 
                    key={i}
                    blogTeamProp={blogMap}
                    index={i}
                />
            ))}
        </div>  
    </section>
  )
}
