import { useEffect, useRef } from "react";
import gsap from "gsap";
import phone from "../../assets/hero_image.png";
import "./Hero.css";

function Hero() {
  const phoneRef = useRef(null);

  useEffect(() => {
    gsap.to(phoneRef.current, {
      y: -20,
      duration: 1.5,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <div className="heroContainer">
      <div className="text-container">
        <p className="hero-title">
          An enjoyable, engaging, and efficient way to learn!
        </p>
        <p className="hero-subtitle">Learn, Play, and Earn</p>
      </div>

       <div className='getStartButton'>
        <p className='getStartButtonText'>Get Started</p>
      </div>

      <img ref={phoneRef} src={phone} className="hero-logo" alt="LearnFi Phone" />
    </div>
  );
}

export default Hero;
