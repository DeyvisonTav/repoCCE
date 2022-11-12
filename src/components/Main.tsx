import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";


export function Main() {
  useEffect(() => {
    Aos.init({duration: 1000, easing: 'ease-out'})
})
  return (
    <div data-aos="fade-left"  className="w-full h-[49.1rem] mt-40 bg-degradeCCE bg-cover " id='main' >
     <div>
      <img
      className="w-[50rem] ml-[15rem]"
      src="/mulher.png" alt="" />
     </div>
    </div>
  );
}
