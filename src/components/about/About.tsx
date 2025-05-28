import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import about1 from "../../assets/about1.png";
import about2 from "../../assets/about2.png";
import about3 from "../../assets/about3.png";
import universe from "../../assets/universe.png";
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
        <img src={universe} className="universe-image" />
      <h1 className="about-title">The Future of Social Learning</h1>

      <div className="aboutContainer">
        <div>
          <h1 className="about-header">Interactive Learning</h1>
          <p className="about-text">
            Transform education through social media-style interactions. Connect with peers and tutors, collaborate on lessons, and make learning enjoyable with community-driven discussions.
          </p>
          <div className='about-getStartButton'>
        <p className='about-getStartButtonText'>Get Started</p>
      </div>
        </div>
                <img src={about1} className="about-logo" />

      </div>

      <div className="aboutContainer">
        <img src={about2} className="about-logo" />
        <div>
          <h1 className="about-header">Gamified Experience</h1>
          <p className="about-text">
        Stay motivated with challenges, leaderboards, and streaks that transform skill mastery into an engaging game-like experience.
        </p>
        <div className='about-getStartButton'>
        <p className='about-getStartButtonText'>Get Started</p>
      </div>
        </div>
      </div>

      <div className="aboutContainer">
        <div>
          <h1 className="about-header">Earn While You Learn</h1>
          <p className="about-text">
Complete lessons, participate in challenges, and earn rewards through our token system for your progress and achievements.</p>
 <div className='about-getStartButton'>
        <p className='about-getStartButtonText'>Get Started</p>
      </div>
        </div>
        <img src={about3} className="about-logo" />
      </div>
    </div>
  );
}

export default About;
