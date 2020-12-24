import './Hero.css';
import headshot from '../headshot.jpg';

function Hero() {
  return (
    <section className="hero text-center">
      <div className="text-center">
        <h1 className="display-5">Hi, I'm Stephen,<br/>a Full-Stack Web Developer</h1>
      </div>
      <div>
        <img src={headshot} alt="Stephen Jeong" />
      </div>
    </section>
  );
}

export default Hero;
