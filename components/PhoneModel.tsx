import { NextPage } from 'next'
import React from 'react'
import { urlFor } from '../sanity';
import { PhModel } from '../typings';
import Member from './member'

interface Props {
  phModel: PhModel;
}

function PhoneModel({phModel}: Props) {
  return (
    <div className='mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-20'>
         <div className="relative h-64 w-full md:h-72">
                <img src={urlFor(phModel.modelImage[0]).url()}   />

            </div>
            <div className="space-y-2 text-xl text-white  md:text-2xl">
            <p> {phModel.modelName}</p>
             

                </div>
  </div>
  )
}

export default PhoneModel