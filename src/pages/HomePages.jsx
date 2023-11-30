import {Banner} from "../component/header/Banner"
import {Popular} from "../component/pop-topics/Popular"
import { EditorPic } from "../component/editors/EditorPic"
import { homeImgBg, homeImgBg2 } from "../utilities/image"

export const HomePages = () => {
  return (
    <div>
        <Banner 
          image = {homeImgBg}
          headTag = {"ADVENTURE"}
          subText = {"Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data."}
          header = {"Richird Norton photorealistic rendering as real photos"}
          dateDisplay = {''}
          position = {''}
        />
        <Popular />
        <Banner 
          image = {homeImgBg2}
          headTag = {"ADVENTURE"}
          subText = {"Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data."}
          header = {"Richird Norton photorealistic rendering as real photos"}
          position = {'flex items-left md:items-center'}
          dateDisplay = {'flex flex-col-reverse'}
          subTextDirect = {'flex flex-col-reverse items-center text-center'}
        />
        <EditorPic />
    </div>
  )
}
