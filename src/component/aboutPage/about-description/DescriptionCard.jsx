import React from 'react'
export const DescriptionCard = ({describeData}) => {
    const {subHead, header, text} = describeData
  return (
    <div className='flex flex-col gap-3 md:w-[21.25rem] lg:w-[25.25rem]'>
        <h5 className='text-lightDark font-semibold text-[1rem]'>{subHead}</h5>
        <h2 className='text-lightDark font-bold text-[1.75rem] md:text-[1.25rem]'>{header}</h2>
        <p className='text-grayText-30 text-[1rem] md:text-[0.75rem]'>{text}</p>
    </div>
  )
}
