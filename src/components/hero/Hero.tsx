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
    <section className="heroContainer">
      <div className="textContainer">
        <h1 className="heroTitle">
          An enjoyable, engaging, and efficient way to learn!
        </h1>
        <p className="heroSubtitle">Learn, Play, and Earn</p>
        <button className="getStartButton">Get Started</button>
      </div>
      <img ref={phoneRef} src={phone} className="heroImage" alt="LearnFi App" />
    </section>
  );
}

export default Hero;
