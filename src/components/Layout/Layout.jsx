import { useState } from "react"
import MenuItems from "./_components/MenuItems"
import Form from "../Form/Form"
import Calendar from '../Calendar/Calendar'
import Activity from "../Activity/Activity"
import Recent from "../Activity/Recent"


const Header = () => {
    const [slider, setslider] = useState(true)
  return (
        <div className="flex" >
        {/* sidebar  */}
            <div className={`expandable_div  ${slider ? "expanded" : ' '} h-[100vh] border-r-[1px]  border-[border_color]`} >
                {/* Car Logo  */}
                <div className="h-[94px] border-b-[1px] border-[border_color] flex items-center justify-center" >
                    <img src="/assets/icons/logo.svg" alt="Logo"  />
                </div>
                {/* menu items list  */}
                <div>
                    <MenuItems />
                </div>
            </div>
        {/* header  */}
        <div className="flex flex-col w-full" >

            <div className="flex justify-between w-full h-[94px] items-center border-b-[1px] border-[border_color]" >
                    {/* humberger icon  */}
                    <div className="ml-[13px]" onClick={()=>{setslider(!slider)}} >
                        <img src="/assets/icons/slider.svg" alt="navbar" className="h-[24px] w-auto" />
                    </div>
                    {/* notifications and user settings  */}
                    <div className="flex gap-[21px] mr-[20px] md:mr-[71px]" >
                        <div className="rounded-[10px] border-[1px] bg-[backgrund] border-solid p-[9px] h-fit w-fit border-[border_color]" >
                            <img src="/assets/icons/bell.svg" alt="Bell" className="h-[!24px] w-[24px]" />
                        </div>
                        <div className="rounded-[10px] border-[1px] bg-[backgrund] border-solid p-[9px] h-fit w-fit border-[border_color]" >
                            <img src="/assets/icons/person.svg" alt="Bell" className="h-[!24px] w-[24px]" />
                        </div>
                    </div>
            </div>

        {/* main content calendar page */}
            <div className="py-[23px] w-full px-[43px]" >
                {/* heading  */}
                <div className="font-[600] text-[25px]" >
                    Calendar
                </div>
                {/* vehical Search form */}
                <div className=" mt-[20px] sm:mt-[40px] md:mt-[67px]" >
                    <Form  />
                </div>
                <div className="underline text-gray-400 text-end mt-[30px] mb-[11px]" >
                    Export
                </div>
                {/* Calendar Layout  */}
                <div className="grid grid-cols-12 bg-backgrund rounded-[10px] border-[1px] border-[border_color] " >
                    {/* Calendar here */}
                    <div className="col-span-12 md:col-span-9" >
                        <Calendar />
                    </div>
                    {/* Acitivity Items */}
                    <div className="col-span-12 md:col-span-3" >
                        {/* Activity Information */}
                        <div className="w-full" >
                            <Activity />
                        </div>
                        {/* Recent Activity */}
                        <div className="w-full" >
                            <Recent />
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </div>
  )
}

export default Header