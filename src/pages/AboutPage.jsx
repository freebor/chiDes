import {Banner} from "../component/header/Banner"
import { Footer } from "../component/footer/Footer"
import { aboutImg } from "../utilities/image"
import { ShowAbout } from "../component/aboutPage/ShowAbout"

export const AboutPage = () => {
  return (
    <div>
        <Banner 
          image = {aboutImg}
          headTag = {""}
          subText = {"Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data."}
          header = {"About Us"}
          position = {'flex items-left md:items-center text-center'}
          dateDisplay = {'hidden'}
        />
        <ShowAbout />
    </div>
  )
}
