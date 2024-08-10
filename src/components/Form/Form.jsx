import { useState } from "react"
import Selection from "./_components/Selection"

const Form = () => {
    const [show, setShow] = useState(false)
  return (
    <div className="py-[25px] md:py-[31px] px-[25px] md:px-[48px] bg-backgrund rounded-[10px] border-[1px] border-[broder_color]" >
        {/* search input */}
        <div className="flex gap-[21px]" >
            <div className="flex flex-col w-full" >
                <label htmlFor="Search">Search</label>
                <input type="text" className="w-full px-[13px] h-[43px] rounded-[10px]  outline-none border-[1px] border-[border_color] focus:outline-none" placeholder="Search By Customer Name , Vehicle...."  />
            </div>
            <div className="h-[43px] flex items-center justify-center self-end rounded-[10px] w-[100px] md:w-[173px] bg-[#242E69] text-white text-[14px] md:text-[18px] font-[500]" >
                Search
            </div>

        </div>
        {/* model selection dropdowns */}
        <div className={`grid bg-backgrund grid-cols-1 expandable_form ${show ? "expanded-form" : ""} sm-grid-cols-3 md:grid-cols-4 mx-auto mt-[14px] gap-[21px]`} >
            <div className="w-full" >
                {/* heading */}
                <div className="" >Make</div>
                {/* input  */}
                <Selection  />
            </div>
            <div className="w-full" >
                {/* heading */}
                <div className="" >Model</div>
                {/* input  */}
                <Selection  />
            </div>
            <div className="w-full" >
                {/* heading */}
                <div className="" >Zip/Postal Code</div>
                {/* input  */}
                <input type="text" className='w-full outline-none focus:outline-none border-[1px] border-[border_color] rounded-[10px] h-[43px] px-[12px]' placeholder="Text Here" />
            </div>
            <div className="w-full" >
                {/* heading */}
                <div className="" >City</div>
                {/* input  */}
                <Selection  />
            </div>
        </div>
        {/* show less and more click on this to show and hide more options */}
        <div className={`hover:underline font-[500] mt-[15px] cursor-pointer ${show ? "underline"  : ""} `} onClick={()=>setShow(!show)} >
            {
                show ? "Show Less" : "Show More"
            }
        </div>
    </div>
  )
}

export default Form