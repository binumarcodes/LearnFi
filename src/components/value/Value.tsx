import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import tutor from "../../assets/tutor.jpg";
import learner from "../../assets/learner.png";
import PremiumUser from "../../assets/premium_user.png";
import "./Value.css";

gsap.registerPlugin(ScrollTrigger);

function Value() {
  const valueRef = useRef(null);

  useLayoutEffect(() => {
    if (!valueRef.current) return;
  
    let ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>(".valueContainer"); // Fix: Explicitly set the type
  
      sections.forEach((section, index) => {
        const text = section.querySelector(".value-text") as HTMLElement | null;
        const img = section.querySelector(".value-logo") as HTMLElement | null;
  
        if (text) {
          gsap.from(text, {
            opacity: 0,
            x: index % 2 === 0 ? -50 : 50,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          });
        }
  
        if (img) {
          gsap.from(img, {
            opacity: 0,
            scale: 0.8,
            rotate: index % 2 === 0 ? -5 : 5,
            duration: 1.5,
            ease: "elastic.out(1, 0.5)",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          });
        }
      });
    }, valueRef);
  
    return () => ctx.revert();
  }, []);
  

  return (
    <div ref={valueRef} className="value-wrapper">
      <h1 className="value-title">Inclusive benefits for all users on the platform</h1>

      <div className="valueContainer">
        <div>
          <h3 className="value-for">For Learners</h3>
          <p className="value-text">
            Learn in a fun, interactive way while earning Xion tokens for completing tasks. Connect with a vibrant community, and stay motivated with gamified challenges.
          </p>
        </div>
        <img src={learner} className="value-logo" />
      </div>

      <div className="valueContainer">
        <img src={tutor} className="value-logo" />
        <div>
          <h3 className="value-for">For Tutors</h3>
          <p className="value-text">
            Teach, mentor, and earn Xion tokens. Offer one-on-one mentorship, gain recognition with NFT certificates, and enhance your teaching with AI-powered tools.
          </p>
        </div>
      </div>

      <div className="valueContainer">
        <div>
          <h3 className="value-for">For Premium Users</h3>
          <p className="value-text">
            Unlock AI-generated flashcards, priority mentorship, and exclusive rewards. Enjoy a personalized learning experience with higher earning potential and Mint non-transferable NFT certificates.
          </p>
        </div>
        <img src={PremiumUser} className="value-logo" />
      </div>
    </div>
  );
}

export default Value;
