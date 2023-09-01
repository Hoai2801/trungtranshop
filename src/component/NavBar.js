import React from "react";
import { Link} from "react-router-dom";
export default function App() {

  return (
    <>
      <nav className="h-[90px] py-[20px] lg:flex shadow-md bg-white hidden sticky top-0 justify-center gap-[55px] z-50">
        <div className="text-[16px] font-bold text-[#606060] justify-between flex gap-[32px]">
            <Link to="/"><img src="https://trungtran.vn/images/config/logo-trungtran-ngang-nen-trang-a2x-100_1680001630.jpg" alt="logo" className="w-[200px] h-[50px] min-w-[100px]"/></Link>
          <div className="text-[16px] font-bold text-[#606060] justify-between flex gap-[32px] mt-3">
            <Link to="/ct-gioi-thieu">Giới thiệu</Link>
            <Link to="laptop">Laptop</Link>
            <Link to="phu-kien">Phụ kiện</Link>
            <Link to="hot-sale">Khuyến mãi</Link>
          </div>
          <form className="relative">
            <input type="text" className="rounded-[50px] w-[310px] h-[44px] drop-shadow-md shadow-blue-300 p-[15px] focus:outline-none text-[15px]" placeholder="Tìm kiếm laptop và phụ kiện" />
            <button type="submit"><img src="https://trungtran.vn/blocks/search/assets/images/search_m.png" alt="search" className="w-[24px] h-[24px] absolute right-[10px] top-[48%] translate-y-[-50%]" /></button>
          </form>
        </div>
        <div className="flex justify-between gap-[45px] ml-[40px] mt-2">
          <div className="relative">
            <img src="https://cdn-icons-png.flaticon.com/128/2961/2961957.png" alt="" className="w-[30px]"/>
            <div className="bg-blue-600 w-5 h-5 absolute top-[-10px] right-[-10px] rounded-full text-center text-white">0</div>
          </div>
          <div className="relative">
            <img src="https://cdn-icons-png.flaticon.com/128/649/649931.png" alt="" className="w-[30px]"/>
            <div className="bg-blue-600 w-5 h-5 absolute top-[-10px] right-[-10px] rounded-full text-center text-white">0</div>
          </div>
          <Link><img src="https://cdn-icons-png.flaticon.com/128/747/747376.png" alt="" className="w-[30px]"/></Link>
        </div>
      </nav>
      <nav className="bg-[#12419B] h-[60px] w-full p-2 flex justify-between lg:hidden">
        <div>
          <img src="https://trungtran.vn/images/config/logo_m_1676275947.png" alt="logo" className="h-[50px]" />
        </div>
        <form action="submit" className="relative mt-[8px]">
          <input type="text" className="rounded-sm h-[35px]" placeholder="Tìm kiếm"/>
          <button><img src="https://trungtran.vn/blocks/search/assets/images/search_m.png" alt="" className="w-[20px] h-[20px] right-[8px] top-[8px] absolute" /></button>
        </form>
        <div className="flex">
          <img src="https://cdn-icons-png.flaticon.com/128/649/649931.png" alt="" className="mt-1" />
          <img src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp" alt="" className="mt-1" />
        </div>
      </nav>
    </>
  )
}
