import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Home() {
  const typedRef = useRef(null);

   useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Shop big, Spend less",],
      typeSpeed: 100,
      backSpeed: 40,
      startDelay: 300,
      showCursor: true,
      cursorChar: "▌",
    });
    return () => typed.destroy();
  }, []);

  return (
    <div className="home">

 <section className="mybannersect">
  <div className="logo-container bnlogo">
   <a href="/">
    <img src="/images/zunglogo.png" alt="Zung Logo" /></a>
  </div>
  <div className="bannersect">
    <img src="/images/man7.jpg" className="bnimg"  alt="Model" />
    <div className="bn-writeup">
      <h1 className="bn-title typed"><span ref={typedRef}></span></h1>
      {/* <p className="bn-sub"><span ref={typedRef}></span></p> */}
     <a href="/popular">
      <button className=" writeup-btn">Shop now</button>
     </a>
    </div>
  </div>
</section>





      {/* FEATURE CARDS */}
      <section className="features">
        <div className="feature-card" data-aos="zoom-in">
          <h2>New Drops</h2>
        </div>

        <div className="feature-card" data-aos="zoom-in" data-aos-delay="150">
          <h2>Streetwear</h2>
        </div>

        <div className="feature-card" data-aos="zoom-in" data-aos-delay="300">
          <h2>Winter Fits</h2>
        </div>
      </section>

    </div> 
  );
}
