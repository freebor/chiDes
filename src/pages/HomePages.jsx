import {Header} from "../component/header/Header"
import {Popular} from "../component/pop-topics/Popular"
import { Banner } from "../component/header/Banner"
import { EditorPic } from "../component/editors/EditorPic"
import { Footer } from "../component/footer/Footer"

export const HomePages = () => {
  return (
    <div>
        <Header />
        <Popular />
        <Banner />
        <EditorPic />
        <Footer />
    </div>
  )
}
