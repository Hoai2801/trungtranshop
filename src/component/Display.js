import React from 'react'
import Product from './Product.js'
import { Link } from 'react-router-dom'

const Display = ({listDetail}) => {
    
    return (
        <div>
            <div className='bg-white h-[440px] rounded-xl drop-shadow-xl mt-[35px] flex-col justify-between'>
                <div className='flex'>
                    {listDetail.map((item, index) => (
                        <Link to={`/${item.id}`} >
                            <Product
                                key={index}
                                imgURL={item.imgUrl}
                                nameOfProduct={item.nameOfProduct}
                                priceSale={item.priceSale}
                                priceOrigin={item.priceOrigin}
                                options={item.option}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Display
