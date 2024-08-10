
const Activity = () => {
  return (
    <div className="bg-white rounded-[12px] mt-0 md:mt-[21px] ml-[21px] md:ml-0 mr-[21px] border-[1px] border-[border_color] p-[20px]" >
        <div className="text-[14px] font-[600]" >Activity Information</div>
        {/* items info  */}
        <div className="mt-[16px] " >
            <div className="flex items-center" >
                <div className="h-[14px] w-[14px] bg-purple-500 rounded-full mr-[8px]" ></div>
                <span className="text-[12px] font-[400]" >Confirmed</span>
            </div>
            <div className="flex items-center my-[8px]">
                <div className="h-[14px] w-[14px] bg-green-500 rounded-full mr-[8px]" ></div>
                <span className="text-[12px] font-[400]" >In Progress</span>
            </div>
            <div className="flex items-center">
                <div className="h-[14px] w-[14px] bg-yellow-500 rounded-full mr-[8px]" ></div>
                <span className="text-[12px] font-[400]" >Pending</span>
            </div>
            <div className="flex items-center mt-[8px]" >
                <div className="h-[14px] w-[14px] bg-red-500 rounded-full mr-[8px]" ></div>
                <span className="text-[12px] font-[400]" >Cancel</span>
            </div>
        </div>

    </div>
  )
}

export default Activity