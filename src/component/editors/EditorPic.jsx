import { editorPicArray } from "../../utilities/mockData"
import { EditorCard } from './EditorCard'

export const EditorPic = () => {
  return (
    <section className="flex justify-center">
        <div className='w-[94%] md:w-[92%] flex flex-col gap-[1.8rem] my-20'>
            <h2 className="text-darkText font-bold text-[2.25rem]">Editor’s Pick</h2>
            <div className="flex flex-col md:flex-row flex-wrap justify-center gap-5">
                {editorPicArray.map((editPic, i)=>{
                    return(
                        <EditorCard 
                            key={i}
                            editData={editPic}
                        />
                    )
                })}
            </div>
        </div>
    </section>

  )
}
