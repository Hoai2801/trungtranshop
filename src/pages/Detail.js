import React from 'react'
import { Link } from 'react-router-dom';

const Detail = () => {
    const product = {
      "type": "Máy tính xách tay",
      "brand": "Dell",
      "kind": "Dell Precision",
      "name": "Dell Precision 5560 i5 11500H 16GB 256GB NVidia Quadro T1200 FHD+"
    }
    let urlElements = window.location.href.split('/');
    console.log(urlElements)
  return (
    <div className='flex flex-col items-center gap-[20px]'>
      <h2 className='text-orange-500 font-bold mt-[20px]'>Ngày 02/09 - Trung Trần vẫn làm việc phục vụ Quý Khách bình thường từ 8h30-20h</h2>
      <div className='flex flex-col items-start lg:w-[80%] p-5 lg:p-0'>
        <div>
          <h3 className='font-bold text-[14px] text-gray-500'><Link to="/">Trang chủ</Link> &gt; <Link to={product.type === "Máy tính xách tay" ? "/laptop" : "/dien-thoai"}>{product.type}</Link> &gt; <Link to={`/` + product.brand.toLowerCase()}>{product.brand}</Link> &gt; <Link to={`/` + product.kind.toLowerCase().replace(" ", "-")}>{product.kind}</Link> &gt; <Link to={"/" + product.name.toLowerCase().split(/ +/).join("-")}>{product.name}</Link></h3>
        </div>
      </div>
    </div>
  )
}

export default Detail
