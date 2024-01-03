import React from "react";

function Product({ imgURL, nameOfProduct, priceSale, priceOrigin, options }) {
  return (
    <div className="flex text-center flex-col ml-[40px] mt-[80px] z-50 hover:mt-5 group p-5 hover:shadow-lg bg-white rounded-lg">
      <div className="w-[180px] z-50">
        <p className="bg-orange-500 min-w-[180xp]">Đang có flash sale!</p>
        <img src={imgURL} alt="" className="mb-[50px]" />
        <h2 className="font-bold">{nameOfProduct}</h2>
        <div className="flex justify-between mt-[10px]">
          <h3 className="text-[18px] font-bold text-orange-500">{priceSale}</h3>
          <h3 className="text-[12px] leading-7">{priceOrigin}</h3>
        </div>
        <div className="flex justify-between">
          <p>{options} phiên bản</p>
          <p className="flex">
            <img
              src="https://cdn-icons-png.flaticon.com/128/2961/2961957.png"
              alt=""
              className="text-orange-500 w-[15px] h-[15px] mt-[5px] mr-[5px]"
            />
            yêu thích
          </p>
        </div>
        <div className="group-hover:block hidden">
          <div className="w-full rounded-lg h-fit bg-gray-300 mt-2 ">
            CPU: Intel® Core™ i5 1240P RAM: 16GB DDR 3200MHz Màn hình: 14" 2.2K
            (2240x1400) Đồ họa: Intel® Iris® Xe Graphics
          </div>
          <div>
              <button onClick={null} className="bg-orange-500 w-full rounded-lg mt-2 z-50 flex gap-2 align-middle">
                <div className="w-[50px] p-2 rounded-md bg-yellow-300">
                  <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="" className="w-5 h-5"/>
              </div>
              <p className="mt-1 mr-2 text-white justify-center flex w-full">So sánh</p></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
