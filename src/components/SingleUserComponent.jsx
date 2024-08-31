import React from 'react'
import { useState } from 'react';
import { MdOutlineChangeCircle } from 'react-icons/md'
function SingleUserComponent( {person, setPerson} ) {

  const [activeIcon, setActiveIcon] = useState(false);

  function changePerson () {
    setPerson(
    {
      name:'Marija',
      lastname:'Stevanovic',
      age:17,
      address:'Backa Palanka'
    })
    setActiveIcon(true);
  }

  return (
    <div className='w-[300px] h-[300px] border-2 border-black rounded-2xl mx-auto mt-[100px] bg-blue-900 '>
      <h2 className='text-center mb-[10px] text-white text-2xl'>{person.name}</h2>
      <h2 className='text-center mb-[10px] text-white text-2xl'>{person.lastname}</h2>
      <h3 className='text-center mb-[10px] text-white'>{person.age}</h3>
      <h4 className='text-center mb-[10px] text-white'>{person.address}</h4>

      <button onClick={changePerson} className='flex items-center gap-[10px] py-[12px] px-[24px] bg-slate-500 rounded-full text-white'>
        {' '}
         Change Person
      </button>
      {activeIcon ? 
      <MdOutlineChangeCircle 
        size={32} 
        color='red' 
        className='ml-[10px]' 
      />
      : 
      <MdOutlineChangeCircle 
        size={32} 
        color='black' 
        className='ml-[10px]' 
      />
      }
    </div>
  )
}

export default SingleUserComponent