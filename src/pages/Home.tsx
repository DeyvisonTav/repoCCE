import { useEffect } from "react";
import { Main } from "../components/Main";
import { Swipers } from "../components/Slides/Swiper";
import Aos from "aos";
import 'aos/dist/aos.css'
import { Footer } from "../components/Footer";

export function Home() {
  useEffect(() => {
      Aos.init({duration: 1000, easing: 'ease-out'})
  })
  
  
  
  return (
    <div className="max-w-full w-screen overflow-hidden">
      <Swipers/>
      <Main />
    </div>
  );
}
