import './Hero.css';
import headshot from '../headshot.jpeg';

function Hero() {
  return (
    <section className="hero text-center">
      <div className="typewriter text-center">
        <h1 className="display-4">Hi, I'm Stephen,</h1>
        <h1 className="display-4">a Full-Stack Web Developer</h1>
        {/* <h4>sub heading</h4> */}
      </div>
      <div className="fade-in">
        <img src={headshot} alt="Stephen Jeong" />
      </div>
    </section>
  );
}

export default Hero;
