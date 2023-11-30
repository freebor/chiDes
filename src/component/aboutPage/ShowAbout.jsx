import { AboutDescribe } from "./about-description/AboutDescribe"
import { BlogTeam } from "./team-blog/BlogTeam"
import { Developer } from "./team-blog/developers/Developer"
export const ShowAbout = () => {
  return (
    <div>
        <AboutDescribe />
        <BlogTeam />
        <Developer />
    </div>
  )
}
