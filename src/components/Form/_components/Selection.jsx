import React from 'react'

const Selection = () => {
  return (
    <div className='w-full ' >
        <select name="cars" className=' text-gray-400 w-full outline-none focus:outline-none border-[1px] border-[border_color] rounded-[10px] h-[43px] px-[12px]'   id="cars">
            <option value="Select" className='text-gray-400' >Select</option>
            <option value="volvo">Volvo</option>
            <option value="Ferrari">Ferrari</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
        </select>
    </div>
  )
}

export default Selection