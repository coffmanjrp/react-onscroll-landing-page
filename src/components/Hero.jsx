import './Hero.scss';

const Hero = ({ imageSrc }) => {
  return (
    <div className="hero">
      <img src={imageSrc} alt="Travell" className="hero__image" />
      <h1 className="hero__title">Travel Made Easy</h1>
    </div>
  );
};

export default Hero;
