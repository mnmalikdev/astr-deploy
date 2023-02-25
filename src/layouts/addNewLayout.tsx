import { IAddNewProps } from '@/types/layout'
import React from 'react'

const AddNewLayout : React.FC<IAddNewProps> = ({children}) => {
  return (
    <div className='bg-[#EFCA08] h-screen'>
        {children}
    </div>
  )
}

export default AddNewLayout