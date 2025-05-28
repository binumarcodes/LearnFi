import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Home from "../../assets/home.png";
import Profile from "../../assets/profile.png";
import "./Screenshort.css";

gsap.registerPlugin(ScrollTrigger);

function Screenshort() {
  const containerRef = useRef(null);
  const leftPhoneRef = useRef(null);
  const rightPhoneRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let ctx = gsap.context(() => {
      gsap.from(leftPhoneRef.current, {
        opacity: 0,
        x: -200,
        rotate: -25,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(rightPhoneRef.current, {
        opacity: 0,
        x: 200,
        rotate: 25,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="screenshort-container">
      {/* <img ref={leftPhoneRef} src={Home} className="screenshort-phone left-phone" />
      <img ref={rightPhoneRef} src={Profile} className="screenshort-phone right-phone" /> */}
    </div>
  );
}

export default Screenshort;
