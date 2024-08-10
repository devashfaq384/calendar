import {Avatar} from "@nextui-org/react";

const RecentItem = () => {
  return (
    <div className="flex gap-[14px] pt-[16px] " >
        <div className="flex flex-col items-center" >
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" size="md" />
            <div className="flex-grow pt-[40px] border-l-[2px] border-dashed border-[border_color]" ></div>
        </div>
        {/* details  */}
        <div>
            {/* heading */}
            <div className="text-[12px] font-[500]" >Suzuki Swift 9:00am - 9:00pm California</div>
            <div className="text-[12px] font-[400] text-[#707070]" >June 2024</div>
            <div className="text-[10px] font-[400]" >Customer Name</div>
        </div>
    </div>
  )
}

export default RecentItem