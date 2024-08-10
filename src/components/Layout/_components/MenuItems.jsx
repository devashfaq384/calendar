import { useState } from "react";
import { menuItems } from "../../../constants/menu";

const MenuItems = () => {
  const [selected, setSelected] = useState(1);

  return (
    <div className="mt-[25px] md:mt-[61px]">
      {menuItems.map((item, ind) => (
        <div key={ind} className={`w-[50px] transition-all duration-500 my-[22.2px] h-[35px] md:w-[63px] md:h-[37px] rounded-[5px] flex items-center justify-center mx-auto cursor-pointer ${
            selected === ind ? "bg-[#242E69]" : "bg-transparent"
          }`}
          onClick={() => setSelected(ind)}
        >
          <img src={item.ref} alt={item.name} className="w-[19px] h-[19px]" />
        </div>
      ))}
    </div>
  );
};

export default MenuItems;
