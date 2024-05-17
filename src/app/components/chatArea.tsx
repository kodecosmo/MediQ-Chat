import Image from 'next/image'
import React from 'react'
import { assets } from '../../../public/assets/assets'

export const ChatArea = () => {
  return (
    <div className='flex-1 min-h-screen pb-[15vh] relative'>
        <div className="flex items-center justify-between text-[22px] p-5 text-[#585858]">
            <p>MedIQ</p>
            <Image src={assets.user_icon} alt='user icon' className='w-10 rounded-full'/>
        </div>
        
        <div className="max-w-[900px] m-auto">
            <div className="my-12 text-[56px] text-[#c4c7c5] font-semibold p-5">
                <p><span className='bg-'>Hello, Shakthi</span></p> 

                <p>What is your Emergency?</p>
            </div>

            <div className="grid grid-cols-4 gap-4 p-5">
                <div className="h-[200px] p-4 bg-[#f0f4f9] rounded-xl relative cursor-pointer hover:bg-[#dfe4ea]">
                    <p className='text-[#585858] text-[17px]'>First aid for a burn</p>
                    <Image src={assets.message_icon} alt='First aid icon' className='w-9 p-1 absolute bg-white rounded-[20px] bottom-3 right-3'/>
                </div>

                <div className="h-[200px] p-4 bg-[#f0f4f9] rounded-xl relative cursor-pointer hover:bg-[#dfe4ea]">
                    <p className='text-[#585858] text-[17px]'>What to do if i was bitten by a dog</p>
                    <Image src={assets.compass_icon} alt='First aid icon' className='w-9 p-1 absolute bg-white rounded-[20px] bottom-3 right-3'/>
                </div>

                <div className="h-[200px] p-4 bg-[#f0f4f9] rounded-xl relative cursor-pointer hover:bg-[#dfe4ea]">
                    <p className='text-[#585858] text-[17px]'>First aid training guide</p>
                    <Image src={assets.code_icon} alt='First aid icon' className='w-9 p-1 absolute bg-white rounded-[20px] bottom-3 right-3'/>
                </div>

                <div className="h-[200px] p-4 bg-[#f0f4f9] rounded-xl relative cursor-pointer hover:bg-[#dfe4ea]">
                    <p className='text-[#585858] text-[17px]'>Tips to get started with MedIQ</p>
                    <Image src={assets.bulb_icon} alt='First aid icon' className='w-9 p-1 absolute bg-white rounded-[20px] bottom-3 right-3'/>
                </div>
            </div>
        </div>

        <div className=" w-full max-w-[900px] px-5 m-auto">
            <div className="flex items-center justify-between gap-5 bg-[#f0f4f9] py-3 px-5 rounded-[50px]">
                <input type='text' placeholder='Describe your emergency' className='flex-1 flex-wrap bg-transparent border-none outline-none p-2 text-[16px]'/>
                <div className='flex gap-4 items-center'>
                    <Image src={assets.gallery_icon} alt='image icon' className='w-6 cursor-pointer'/>
                    <Image src={assets.mic_icon} alt='mic icon' className='w-6 cursor-pointer'/>
                    <Image src={assets.send_icon} alt='send icon' className='w-6 cursor-pointer'/>
                </div>
            </div>

            <p className="bottom-info">
                All rights recerved by MedIQ&copy; kode
            </p>
        </div>
    </div>
  )
}
