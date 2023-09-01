import { useState, useEffect, useCallback } from "react";
import { useCountdown } from "../hooks/useCountdown.js";
import Display from "../component/Display.js";
import { Link } from "react-router-dom";
const Home = () => {
    const listDetail = [
        {
            "imgUrl": "https://trungtran.vn/images/products/2023/resized/lenovo_legion_5_pro_2023_y9000p_12-copy-copy.webp",
            "nameOfProduct": "Legion5",
            "priceSale": 20000000,
            "priceOrigin": 40000000,
            "option": 1,
            "like": 0,
        },
        {
            "imgUrl": "https://trungtran.vn/images/products/2023/resized/lenovo_legion_5_pro_2023_y9000p_12-copy-copy.webp",
            "nameOfProduct": "Legion5",
            "priceSale": 20000000,
            "priceOrigin": 40000000,
            "option": 1,
            "like": 0,
        },
        {
            "imgUrl": "https://trungtran.vn/images/products/2023/resized/lenovo_legion_5_pro_2023_y9000p_12-copy-copy.webp",
            "nameOfProduct": "Legion5",
            "priceSale": 20000000,
            "priceOrigin": 40000000,
            "option": 1,
            "like": 0,
        }
    ]
    const imgURL = [
        "https://trungtran.vn/images/slideshow/2023/05/18/slideshow_large/slide-so-sanh-laptop-nhap-my-vs-trung-quoc_1684377408.webp",
        "https://trungtran.vn/images/slideshow/2023/02/22/slideshow_large/dell-xps-13_1677050031.webp",
        "https://trungtran.vn/images/slideshow/2023/02/22/slideshow_large/slide-laptop-gaming-790x315px_1677049997.webp",
        "https://trungtran.vn/images/slideshow/2023/02/22/slideshow_large/slide-may-tram-do-hoa-790x315px_1677049777.webp",
        "https://trungtran.vn/images/slideshow/2023/02/22/slideshow_large/slide-dell-precision-790x315_1677049892.webp",
        "https://trungtran.vn/images/slideshow/2023/02/22/slideshow_large/slide-dinh-vi--790x315px_1677049738.webp",
        "https://trungtran.vn/images/slideshow/2023/02/22/slideshow_large/slide-thinkpad-790x315px_1677049952.webp",
        "https://trungtran.vn/images/slideshow/2023/02/22/slideshow_large/slide-macbook-pro-790x315px_1677049827.webp"
    ];
    const dayToCountDown = Date.parse("August 30, 2023");

    const [days, hours, minutes, seconds] = useCountdown(dayToCountDown);

    const [index, setIndex] = useState(0);
    const changeIndex = useCallback(() => {
        if (index !== 7) setIndex(index + 1);
        else setIndex(0);
    }, [index]);

    useEffect(() => {
        const intervalId = setInterval(changeIndex, 5000);

        return () => {
            clearInterval(intervalId);
        };
    }, [changeIndex]);
    return (
        <div className="flex flex-col justify-center lg:px-[120px] px-[20px]">
            <div className="flex justify-center mt-6 text-[16px] font-semibold">
                <p className="text-[#f26739]">
                    Chiến Game Cực Đỉnh Cùng Các Mẫu Mã Laptop Gaming Lenovo Legion Mới Nhất Với Cấu Hình Khủng!
                </p>
            </div>
            <div className="mt-6 grid grid-cols-3">
                <div className="rounded-[16px] overflow-hidden w-fit col-span-2 mx-0">
                    <img src={imgURL[index]} alt="hero" />
                </div>
                <div className="p-4 flex flex-col shadow rounded-xl mx-0 justify-between">
                    <div className="bg-[#F3F5F9] py-2 px-4 rounded-lg w-[380px] h-[77px] text-[14px] flex flex-col">
                        <p className="text-[#5D5D5D] font-bold">
                            Mua laptop Dell core i7 mới nhất hiện nay
                        </p>
                        <p className="b-0 text-[#B0B0B0] mt-auto">22/08/2023 - 14 views</p>
                    </div>
                    <div className="bg-[#F3F5F9] py-2 px-4 rounded-lg w-[380px] h-[77px] text-[14px] flex flex-col">
                        <p className="text-[#5D5D5D] font-bold">
                            Mua laptop Dell core i7 mới nhất hiện nay
                        </p>
                        <p className="b-0 text-[#B0B0B0] mt-auto">22/08/2023 - 14 views</p>
                    </div>
                    <div className="bg-[#F3F5F9] py-2 px-4 rounded-lg w-[380px] h-[77px] text-[14px] flex flex-col">
                        <p className="text-[#5D5D5D] font-bold">
                            Mua laptop Dell core i7 mới nhất hiện nay
                        </p>
                        <p className="b-0 text-[#B0B0B0] mt-auto">22/08/2023 - 14 views</p>
                    </div>

                    <p className="text-[14px] text-[#098bf6] font-semibold">Tất cả tin tức &gt;</p>
                </div>
            </div>
            <div>
                <div className="flex mt-[68px]">
                    <h3 className="text-[#ff5e22] text-[36px] font-bold inline-block">HOT SALE</h3>
                    <div className="justify-between w-[207px] text-center mt-1 flex ml-[20px]">
                        <div className="bg-[#FFE4DC] w-[40px] h-[37px] leading-[16px] text-[14px] font-bold rounded-lg pt-1 drop-shadow"> {days} <span className="text-[#6C6A69] text-[12px] block">ngày</span></div>
                        <div className="bg-[#FFE4DC] w-[40px] h-[37px] leading-[16px] text-[14px] font-bold rounded-lg pt-1 drop-shadow"> {hours} <span className="text-[#6C6A69] text-[12px] block">giờ</span></div>
                        <div className="bg-[#FFE4DC] w-[40px] h-[37px] leading-[16px] text-[14px] font-bold rounded-lg pt-1 drop-shadow"> {minutes} <span className="text-[#6C6A69] text-[12px] block">phút</span></div>
                        <div className="bg-[#FFE4DC] w-[40px] h-[37px] leading-[16px] text-[14px] font-bold rounded-lg pt-1 drop-shadow"> {seconds} <span className="text-[#6C6A69] text-[12px] block">giây</span></div>
                    </div>
                </div>
                <Display listDetail={listDetail} />
            </div>
            <div>
                <div className="flex mt-[68px]">
                    <h3 className="text-[36px] font-bold inline-block">Laptop theo nhu cầu</h3>
                </div>
                <div className="bg-white w-full h-[315px] rounded-xl drop-shadow-2xl flex justify-center mt-[30px] py-[45px]">
                    <div className="flex flex-col justify-center rounded-xl w-[210px] gap-5 hover:drop-shadow-xl px-5 mt-0 relative group h-fit bg-white pb-5">
                        <img src="https://trungtran.vn/images/products/cat/resized/dm1_1673947409.webp" alt="" />
                        <div className="grid grid-cols-3 mt-2">
                            <img src="https://trungtran.vn/images//logo/resized/z4045669908665_19886b7f669c4e34a3177a8b89afb631_1673941134.jpg" alt="" />
                            <img src="https://trungtran.vn/images//logo/resized/z4045669912968_e60ef245c5d9b47a9860cc15bdbf9002_1673941172.jpg" alt="" />
                            <img src="https://trungtran.vn/images//logo/resized/z4045669912874_21638c2cf09ea6f3869ee2140c719567_1673941179.jpg" alt="" />
                        </div>
                        <div className="flex justify-center"><h3 className="font-bold">GAME</h3></div>
                        <div className="hidden group-hover:block w-fit h-fit bg-gray-400 rounded-lg p-2 ml-0 text-justify text-[14px] text-white">
                            Được thiết kế chuyên biệt phục vụ cho việc cấu hình chơi game nặng cần xử lý mạnh về đồ họa
                        </div>
                    </div>
                    <div className="flex flex-col justify-center rounded-xl w-[210px] gap-5 hover:drop-shadow-xl px-5 mt-0 relative group h-fit bg-white pb-5">
                        <img src="https://trungtran.vn/images/products/cat/resized/dm2_1673947421.webp" alt="" />
                        <div className="grid grid-cols-3 mt-2">
                            <img src="https://trungtran.vn/images//logo/resized/hoctap1_1673941506.jpg" alt="" />
                            <img src="https://trungtran.vn/images//logo/resized/hoctap2_1673941489.jpg" alt="" />
                            <img src="https://trungtran.vn/images//logo/resized/hoctap3_1673941512.jpg" alt="" />
                        </div>
                        <div className="flex justify-center"><h3 className="font-bold">HỌC TẬP, VĂN PHÒNG</h3></div>
                        <div className="hidden group-hover:block w-fit h-fit bg-gray-400 rounded-lg p-2 ml-0 text-justify text-[14px] text-white">
                            Được thiết kế chuyên biệt phục vụ cho việc cấu hình chơi game nặng cần xử lý mạnh về đồ họa
                        </div>
                    </div>
                    <div className="flex flex-col justify-center rounded-xl w-[210px] gap-5 hover:drop-shadow-xl px-5 mt-0 relative group h-fit bg-white pb-5">
                        <img src="https://trungtran.vn/images/products/cat/resized/dm3_1673947441.webp" alt="" />
                        <div className="grid grid-cols-3 mt-2">
                            <img src="https://trungtran.vn/images//logo/resized/dohoa1_1673941523.jpg" alt="" />
                            <img src="https://trungtran.vn/images//logo/resized/dohoa2_1673941536.jpg" alt="" />
                            <img src="https://trungtran.vn/images//logo/resized/dohoa3_1673941545.jpg" alt="" />
                        </div>
                        <div className="flex justify-center"><h3 className="font-bold">ĐỒ HOẠ, KỸ THUẬT</h3></div>
                        <div className="hidden group-hover:block w-fit h-fit bg-gray-400 rounded-lg p-2 ml-0 text-justify text-[14px] text-white">
                            Được thiết kế chuyên biệt phục vụ cho việc cấu hình chơi game nặng cần xử lý mạnh về đồ họa
                        </div>
                    </div>
                    <div className="flex flex-col justify-center rounded-xl w-[210px] gap-5 hover:drop-shadow-xl px-5 mt-0 relative group h-fit bg-white pb-5">
                        <img src="https://trungtran.vn/images/products/cat/resized/dm4_1673947431.webp" alt="" />
                        <div className="grid grid-cols-3 mt-2">
                            <img src="https://trungtran.vn/images//logo/resized/laptrinh1_1673945831.jpg" alt="" />
                            <img src="https://trungtran.vn/images//logo/resized/laptrinh2_1673945842.jpg" alt="" />
                            <img src="https://trungtran.vn/images//logo/resized/laptrinh3_1673945856.jpg" alt="" />
                        </div>
                        <div className="flex justify-center"><h3 className="font-bold">LẬP TRÌNH</h3></div>
                        <div className="hidden group-hover:block w-fit h-fit bg-gray-400 rounded-lg p-2 ml-0 text-justify text-[14px] text-white">
                            Được thiết kế chuyên biệt phục vụ cho việc cấu hình chơi game nặng cần xử lý mạnh về đồ họa
                        </div>
                    </div>
                    <div className="flex flex-col justify-center rounded-xl w-[210px] gap-5 hover:drop-shadow-xl px-5 mt-0 relative group h-fit bg-white pb-5">
                        <img src="https://trungtran.vn/images/products/cat/resized/dm5_1673947450.webp" alt="" />
                        <div className="grid grid-cols-3 mt-2">
                            <img src="https://trungtran.vn/images//logo/resized/hoctap1_1673941506.jpg" alt="" />
                            <img src="https://trungtran.vn/images//logo/resized/z4045669908665_19886b7f669c4e34a3177a8b89afb631_1673941134.jpg" alt="" />
                            <img src="https://trungtran.vn/images//logo/resized/hoctap2_1673941489.jpg" alt="" />
                        </div>
                        <div className="flex justify-center"><h3 className="font-bold">SIÊU PHẨM</h3></div>
                        <div className="hidden group-hover:block w-fit h-fit bg-gray-400 rounded-lg p-2 ml-0 text-justify text-[14px] text-white">
                            Được thiết kế chuyên biệt phục vụ cho việc cấu hình chơi game nặng cần xử lý mạnh về đồ họa
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex mt-[68px] justify-between">
                        <h3 className="text-[36px] font-bold inline-block">Máy tính xách tay</h3>
                        <div className="flex ustify-between gap-[40px] mt-[20px] text-gray-600">
                            <Link to="/acer">Acer</Link>
                            <Link to="/dell">Dell</Link>
                            <Link to="/lenovo">Lenovo</Link>
                            <Link to="/apple">Apple</Link>
                            <Link to="/laptop" className="text-blue-500">Xem tất cả (560)</Link>
                        </div>
                    </div>
                    <Display listDetail={listDetail} />
                </div>
                <div>
                    <div className="flex mt-[68px] justify-between">
                        <h3 className="text-[36px] font-bold inline-block">Apple</h3>
                        <div className="flex ustify-between gap-[40px] mt-[20px] text-gray-600">
                            <Link to="/macbook">Macbook</Link>
                            <Link to="/imac">iMac</Link>
                            <Link to="/mac-mini">Mac Mini</Link>
                            <Link to="/apple" className="text-blue-500">Xem tất cả (560)</Link>
                        </div>
                    </div>
                    <Display listDetail={listDetail} />
                </div>
                <div>
                    <div className="flex mt-[68px] justify-between">
                        <h3 className="text-[36px] font-bold inline-block">Microsoft Surface</h3>
                        <div className="flex ustify-between gap-[40px] mt-[20px] text-gray-600">
                            <Link to="/surface-laptop-go">Surface Laptop Go</Link>
                            <Link to="/surface-go">Surface Go</Link>
                            <Link to="/surface-pro-7">Surface Pro 7</Link>
                            <Link to="/surface-studio">Surface Studio</Link>
                            <Link to="/microsoft" className="text-blue-500">Xem tất cả (560)</Link>
                        </div>
                    </div>
                    <Display listDetail={listDetail} />
                </div>
                <div>
                    <div className="flex mt-[68px] justify-between">
                        <h3 className="text-[36px] font-bold inline-block">Đặt Trước, Nhận Ưu Đãi Lớn</h3>
                        <div className="flex ustify-between gap-[40px] mt-[20px] text-gray-600">
                            <Link to="/microsoft" className="text-blue-500">Xem tất cả (560)</Link>
                        </div>
                    </div>
                    <Display listDetail={listDetail} />
                </div>
                <div>
                    <div className="flex mt-[68px] justify-between">
                        <h3 className="text-[36px] font-bold inline-block">Dell Alienware</h3>
                        <div className="flex ustify-between gap-[40px] mt-[20px] text-gray-600">
                            <Link to="/microsoft" className="text-blue-500">Xem tất cả (560)</Link>
                        </div>
                    </div>
                    <Display listDetail={listDetail} />
                </div>
                <div>
                    <div className="flex mt-[68px] justify-between">
                        <h3 className="text-[36px] font-bold inline-block">Phụ Kiện Laptop</h3>
                        <div className="flex ustify-between gap-[40px] mt-[20px] text-gray-600">
                            <Link to="/microsoft" className="text-blue-500">Xem tất cả (560)</Link>
                        </div>
                    </div>
                    <Display listDetail={listDetail} />
                </div>
                <div>
                    <div className="mt-[68px] flex flex-col items-center w-full drop-shadow-xl rounded-xl bg-white p-[72px]">
                        <div className="flex justify-center items-center flex-col">
                            <h2 className="text-[36px] font-bold">Bạn Xứng Đáng Điều Tốt Nhất !</h2>
                            <p className="font-bold">Trung Trần Mong Muốn Đem Lại Trải Nghiệm Tốt Nhất</p>
                        </div>
                        <div className="w-full h-fit flex justify-center gap-[40px] mt-[50px]">
                            <div className="flex flex-col items-center w-[330px] h-[320px] shadow-xl gap-[35px] justify-center text-center rounded-xl bg-white p-8">
                                <img src="https://trungtran.vn/upload_images/images/1.png" alt="" className="h-[50px] w-[40px]"/>
                                <h3 className="text-[24px] text-[#ff5e22]">Chất Lượng Cao & Giá Tốt Nhất</h3>
                                <p className="text-[14px] text-gray-500">Đem đến những chiếc Laptop nhập khẩu chính hãng cao cấp với chất lượng dịch vụ không ngừng được nâng cao.</p>
                            </div>
                            <div className="flex flex-col items-center w-[330px] h-[320px] shadow-xl gap-[35px] justify-center text-center rounded-xl bg-white p-8">
                                <img src="https://trungtran.vn/upload_images/images/2.png" alt="" className="h-[50px] w-[80px]"/>
                                <h3 className="text-[24px] text-[#ff5e22]">Đồng Hành</h3>
                                <p className="text-[14px] text-gray-500">Trung Trần cung cấp dịch vụ bảo trì, bảo dưỡng tốt nhất với chi phí tối ưu cho toàn bộ khách hàng, luôn song hành cùng các bạn</p>
                            </div>
                            <div className="flex flex-col items-center w-[330px] h-[320px] shadow-xl gap-[35px] justify-center text-center rounded-xl bg-white p-8">
                                <img src="https://trungtran.vn/upload_images/images/3.png" alt="" className="h-[50px] w-[60px]"/>
                                <h3 className="text-[24px] text-[#ff5e22]">Thấu Hiểu & Tận Tâm</h3>
                                <p className="text-[14px] text-gray-500">Thấu hiểu được nhu cầu, nỗi bận tâm của bạn khi mua hàng công nghệ giá trị cao, Trung Trần luôn hướng tới trải nghiệm tốt nhất và được nâng cấp liên tục.</p>
                            </div>
                        </div>
                        <div className="mt-[70px] flex justify-between gap-[123px]">
                            <div>
                                <h3 className="text-[40px] text-[#ff5e22]">9000+</h3>
                                <p>Khách hàng tin tưởng</p>
                            </div>
                            <div>
                                <h3 className="text-[40px] text-[#ff5e22]">15 năm+</h3>
                                <p>Trên thị trường từ năm 2008</p>
                            </div>
                            <div>
                                <h3 className="text-[40px] text-[#ff5e22]">19000+</h3>
                                <p>Máy đã bán</p>
                            </div>
                            <div>
                                <h3 className="text-[40px] text-[#ff5e22]">80+</h3>
                                <p>Đối tác</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home;