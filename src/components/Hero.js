import './Hero.css';

function Hero() {
  return (
    <section className="hero text-center">
      <div className="typewriter text-center">
        <h1 className="display-4">Hi, I'm Stephen,</h1>
        <h1 className="display-4">a Full-Stack Web Developer</h1>
        {/* <h4>sub heading</h4> */}
      </div>
      <div className="fade-in">
        <img src="https://drive.google.com/uc?id=19t56rNeBmZKienOcd-HR2sfcVIhv4Cs9" alt="Stephen Jeong" />
      </div>
    </section>
  );
}

export default Hero;
