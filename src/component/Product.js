import React from 'react'

function Product({imgURL, nameOfProduct, priceSale, priceOrigin, options}) {
    return (
        <div className='w-[180px] flex text-center flex-col ml-[40px] mt-[80px]'>
            <p className='bg-orange-500'>Đang có flash sale!</p>
            <img src={imgURL} alt="" className='mb-[50px]' />
            <h2 className='font-bold'>{nameOfProduct}</h2>
            <div className='flex justify-between mt-[10px]'>
                <h3 className='text-[18px] font-bold text-orange-500'>{priceSale}</h3>
                <h3 className='text-[12px] leading-7'>{priceOrigin}</h3>
            </div>
            <div className='flex justify-between'>
                <p>{options} phiên bản</p>
                <p className='flex'><img src="https://cdn-icons-png.flaticon.com/128/2961/2961957.png" alt="" className='text-orange-500 w-[15px] h-[15px] mt-[5px] mr-[5px]' />yêu thích</p>
            </div>
        </div>
    )
}

export default Product
