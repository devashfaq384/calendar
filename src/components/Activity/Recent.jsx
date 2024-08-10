import RecentItem from "./_components/RecentItem"

const Recent = () => {
    return (
      <div className="bg-white rounded-[12px] mt-[21px]md:ml-0 ml-[21px] mr-[21px] border-[1px] border-[border_color] p-[20px]" >
          <div className="text-[14px] font-[600]" >Recent Activity</div>
          {/* items info  */}
          <div>
            <RecentItem />
            <RecentItem />
            <RecentItem />
            <RecentItem />
          </div>
      </div>
    )
  }
  
  export default Recent