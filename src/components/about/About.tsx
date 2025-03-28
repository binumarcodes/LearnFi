import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import grinningFace from "../../assets/Grinning face.png";
import gamification from "../../assets/Image (1).png";
import earn from "../../assets/Image.png";
import "./About.css";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const aboutRef = useRef(null);

  useLayoutEffect(() => {
    if (!aboutRef.current) return; // Prevent running GSAP on null

    let ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>(".aboutContainer"); // Explicitly define type
    
      sections.forEach((section) => {
        gsap.from(section, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      });
    

      gsap.from(".about-logo", {
        opacity: 0,
        scale: 0.8,
        duration: 1.2,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: ".about-logo",
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    }, aboutRef);

    return () => ctx.revert(); // Cleanup GSAP animations when component unmounts
  }, []);

  return (
    <div ref={aboutRef} className="about-wrapper">
      <h1 className="about-title">Learn, Play, and Earn – The Future of Social Learning</h1>

      <div className="aboutContainer">
        <img src={grinningFace} className="about-logo" />
        <div>
          <h1 className="about-header">Social Learning</h1>
          <p className="about-text">
            Social media user experience, connect with peers and tutors, collaborate on lessons, and make learning fun with community-driven discussions.
          </p>
        </div>
      </div>

      <div className="aboutContainer">
        <div>
          <h1 className="about-header">Gamified Experience</h1>
          <p className="about-text">
            Stay motivated with challenges, leaderboards, and streaks that make mastering new skills feel like a game.
          </p>
        </div>
        <img src={gamification} className="about-logo" />
      </div>

      <div className="aboutContainer">
        <img src={earn} className="about-logo" />
        <div>
          <h1 className="about-header">Earn While You Learn</h1>
          <p className="about-text">
            Complete lessons, participate in challenges, and earn Xion tokens as rewards for your progress and achievements.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
