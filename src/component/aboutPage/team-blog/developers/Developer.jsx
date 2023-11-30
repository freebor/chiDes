import { DeveloperCard } from './DeveloperCard'
import { aboutDev } from '../../../../utilities/mockData'

export const Developer = () => {
  return (
    <section className='flex flex-col justify-center items-center gap-20 my-20'>
        <h1 className='font-bold text-[2.25rem] text-lightDark'>List of Devs</h1>
        <div className='flex flex-col md:flex-row w-[90%] lg:w-full justify-center gap-16'>
            {aboutDev.map((dev, i)=>{
                return(
                    <DeveloperCard 
                        key={i}
                        devData={dev}
                    />
            )})}
        </div>
        <div className='flex flex-col text-center w-[90%] md:w-[30rem] gap-4'>
            <h2 className='font-bold text-[2.25rem] text-lightDark'>Join our team to be a part of our story</h2>
            <p className='text-[1rem] text-grayText-30'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            <div><button className='bg-[#FFD050] px-12 py-4 font-bold text-lg text-lightDark'>Join Now</button></div>
        </div>
            
    </section>
  )
}
