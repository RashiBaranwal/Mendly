import React from 'react'
import Title from '../component/Title'
import about from '../assets/about.jpg'
import NewLetterBox from '../component/NewLetterBox'

function About() {
  return (
    <div className=' w-[99vw] min-h-[100vh] flex items-center justify-center flex-col  bg-gradient-to-l from-[#141414] to-[#0c2025] gap-[50px] pt-[80px]'>
      <Title text1={'ABOUT'} text2={'US'}/>
      <div className='w-[100%]  flex items-center justify-center flex-col lg:flex-row'>

        <div className='lg:w-[50%] w-[100%] flex items-center justify-center '>
          <img src={about} alt="" className='lg:w-[65%] w-[80%] shadow-md shadow-black rounded-sm' />
        </div>
        <div className='lg:w-[50%] w-[80%] flex items-start justify-center gap-[20px]  flex-col mt-[20px] lg:mt-[0px]'>
          <p className='lg:w-[80%] w-[100%] text-[white] md:text-[16px] text-[13px]'>
            Mendify was born to support recovery, independence, and dignity—created to provide reliable assistive products, medical essentials, and everyday care items in one trusted place. With dependable service, fast delivery, and thoughtful design, Mendify makes healing and daily living simpler, safer, and stress-free.
          </p>
          <p className='lg:w-[80%] w-[100%] text-[white] md:text-[16px] text-[13px]'>
             We focus on empowering people with injuries, disabilities, or special needs by offering products that restore comfort, improve mobility, and make life easier. From wheelchairs and crutches to first aid kits and adaptive clothing, Mendify brings care and convenience to your doorstep.
          </p>
          <p className='lg:w-[80%] w-[100%] text-[15px] text-[white] lg:text-[18px] mt-[10px] font-bold'>Our Mission</p>
          <p className='lg:w-[80%] w-[100%] text-[white] md:text-[16px] text-[13px]'>
            Our mission is to redefine assistive shopping by combining quality, accessibility, and compassion. Mendify connects individuals with trusted products that aid recovery, enhance independence, and support daily living. We strive to create a customer-first platform that not only saves time but also makes life after injury or disability more confident, comfortable, and dignified.
          </p>
        </div>
      </div>
      <div className='w-[100%] flex items-center justify-center flex-col gap-[10px]'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
        <div className='w-[80%] flex items-center justify-center lg:flex-row flex-col py-[40px]'>

          <div className='lg:w-[33%] w-[90%] h-[250px] border-[1px] border-gray-100 flex items-center justify-center gap-[20px] flex-col  px-[40px] py-[10px] text-[white] backdrop-blur-[2px] bg-[#ffffff0b]'>
            <b className='text-[20px] font-semibold text-[#bff1f9]'>Quality Assurance</b>
            <p>Mendly guarantees quality through strict checks, reliable medical sourcing, and a commitment to customer safety always.</p>
          </div>
           <div className='lg:w-[33%] w-[90%] h-[250px] border-[1px] border-gray-100 flex items-center justify-center gap-[20px] flex-col  px-[40px] py-[10px] text-[white] backdrop-blur-[2px] bg-[#ffffff0b]'>
            <b className='text-[20px] font-semibold text-[#bff1f9]'>Convenience</b>
            <p>
             Shop easily with fast delivery, simple navigation, secure checkout, and everything you need in one place.
            </p>
          </div>
           <div className='lg:w-[33%] w-[90%] h-[250px] border-[1px] border-gray-100 flex items-center justify-center gap-[20px] flex-col  px-[40px] py-[10px] text-[white] backdrop-blur-[2px] bg-[#ffffff0b]'>
            <b className='text-[20px] font-semibold text-[#bff1f9]'>Exceptional Customer Service</b>
            <p>
              Our dedicated support team ensures quick responses, helpful solutions, and a smooth shopping experience every time.
            </p>
          </div>
        </div>
      </div>
      <NewLetterBox/>
      
    </div>
  )
}

export default About
