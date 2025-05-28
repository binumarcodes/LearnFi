import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import frame from "../../assets/Frame.png"
import frame2 from "../../assets/Frame2.png"
import "./Value.css";

gsap.registerPlugin(ScrollTrigger);

function Value() {
  const valueRef = useRef(null);

  useLayoutEffect(() => {
    if (!valueRef.current) return;

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>(".cardWrapper");

      sections.forEach((section) => {
        const text = section.querySelector("p");
        const img = section.querySelector("img");

        gsap.from([text, img], {
          opacity: 0,
          y: 40,
          scale: 0.95,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });
    }, valueRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={valueRef} className="value-wrapper">
      <h1 className="value-title">Built for Everyone in the Learning Ecosystem</h1>
      <div className="cards-container">
        <Card
        title="For Learners"
        text="Learn through fun, interactive experiences while earning tokens for task completion. Connect with a vibrant community and stay motivated through gamified challenges."
        imgSrc={frame}
        type="learner"
      />
      <Card
        title="For Tutors"
        text="Teach, mentor, and earn tokens through content creation. Offer personalized mentorship, receive appreciation gifts from learners, gain recognition with certificate achievements, and enhance your teaching with advanced tools."
        imgSrc={frame2}
        type="tutor"
      />

      </div>
    </div>
  );
}



function Card({ title, text, imgSrc, type }: { title: string; text: string; imgSrc: string; type: "learner" | "tutor" }) {
  return (
    <div className="cardWrapper">
      <div className={`iconWrapper ${type}`}>
        <img src={imgSrc} alt={`${title} Icon`} />
      </div>
      <h2>{title}</h2>
      <p className="card-text">{text}</p>
      <div className={`value-getStartButton ${type}`}>
        <p className='value-getStartButtonText'>Get Started</p>
      </div>
    </div>
  );
}



export default Value;
