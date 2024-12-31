import React from 'react'
import { qatarBold, qatarMeduim } from '../Fonts'

const customTitle = (title:string) => {
  return (
    <div className='flex flex-col items-center gap-1 mt-10'>
      <p className={`${qatarMeduim.className} text-gray-900`}>See Our Best Seller Products</p>
      <h1 className={`${qatarBold.className} lg:text-5xl text-3xl text-center  text-primary`}>
          {title}
      </h1>
    </div>
  )
}

export default customTitle
