import {Tabs, Tab} from "@nextui-org/react";
import { IoIosArrowBack , IoIosArrowForward } from "react-icons/io";
import { days , date } from "../../constants/calendar";
import Pink from "./_components/pink";
import Green from "./_components/green";
import Purple from "./_components/purpel";
import Yellow from "./_components/yellow";
import BigGreen from "./_components/BigGreen";


const Calendar = () => {
  return (
    <div className='m-[21px] bg-white p-[20px] rounded-[12px] border-[1px] border-[border_color]' >
      {/* calendar top options  */}
      <div className="flex flex-wrap gap-y-[20px] justify-between" >
        <Tabs key='md' size='md' aria-label="Tabs sizes">
          <Tab key="Month" title="Month"/>
          <Tab key="Week" title="Week"/>
          <Tab key="Day" title="Day"/>
        </Tabs>
        <div className="font-[500]" >
          June 24
        </div>
        <div className="flex gap-[8px]" >
          <div className="p-[12px] border-[1px] rounded-[8px] border-[border_color]" >
            <IoIosArrowBack/>
          </div>
          <div className="flex items-center justify-center bg-[#242E69] rounded-[8px] px-[21px] text-white font-[600] py-[12px]" >
            Today
          </div>
          <div className="p-[12px] border-[1px] rounded-[8px] border-[border_color]" >
            <IoIosArrowBack/>
          </div>
        </div>

      </div>

      {/* calendar */}
      <div className="mt-[24px]" >
        {/* days */}
        <div className="bg-backgrund h-[40px] rounded-t-[10px] grid grid-cols-7 items-center" >
          {
            days.map((day ,ind) =>{
              return (
                <div key={day.sign} className="w-full text-center font-[700] text-[12px]" >
                  {day.name}
                </div>
              )
            })
          }
        </div>
        {/* dates  */}
        <div className="grid grid-cols-7" >
        {
          date.map((date , ind)=>{
            return(
              <div className={`min-h-[100px] ${ind < 4  ? "text-gray-400" : "text-black"} border-t-0 pt-[10px]  text-end border-[0.5px] border-[border_color]`}  >
              
                {ind === 7 ? (
          <div className="">
            <span className="rounded-full overflow-hidden py-[2px] text-white px-[8px] mr-[12px]  bg-[#242E69]">{date}</span>
            <div className="w-full mt-[4px]" >
              <Pink />
            </div>
            <div className="w-full my-[4px]" >
              <Green />
            </div>
            <div className="flex gap-1" >
              <Purple />
              <Yellow />
            </div>
          </div>
        ) : (
          <div className="mr-[12px]" >
          {date}
          </div>
        )}
          {ind === 9 ? (
              <div className="">
                <div className="w-full mt-[4px]" >
                  <Pink />
                </div>
              </div>
              ) : null
          }

          {ind === 17 ? (
              <div className="">
                <div className="w-full mt-[4px]" >
                  <BigGreen />
                </div>
              </div>
              ) : null
          }
                
              </div>
            )
          })
        }
        </div>

      </div>

    </div>
  )
}

export default Calendar