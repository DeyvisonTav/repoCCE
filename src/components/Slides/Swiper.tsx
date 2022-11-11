import {
  EffectFade,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
export function Swipers() {
  return (
    <div className="w-full h-full" id="swipper">
      <div className="">
        <Swiper
          className="flex justify-center items-center shadow-2xl w-[100%] relati "
          modules={[
            EffectFade,
            Autoplay,
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
          ]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          effect={"flip"}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <img
              className=" w-full"
              src="https://www.ccecursos.com.br/imagens/banner/cc_2_1667828352.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className=" w-full "
              src="https://www.ccecursos.com.br/imagens/banner/ne_1667827289.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className=" w-full"
              src="https://www.ccecursos.com.br/imagens/banner/nch_1667826705.png"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="pt-12">
        <div className="flex justify-start py-12 pl-[20rem]">
          
            <a href="/#main">
              <div className="rounded-full shadow-lg shadow-gray-400 p-8 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineChevronDoubleDown
                  className="text-[#FFD272]"
                  size={30}
                />
              </div>
            </a>
      
        </div>
      </div>
    </div>
  );
}
