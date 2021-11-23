import { useInView } from 'react-intersection-observer';
import './Slider.scss';

const Slider = ({ imageSrc, title, subtitle, flipped }) => {
  const { ref, inView } = useInView({ threshold: 0.4 });

  const renderContent = () => {
    if (!flipped) {
      return (
        <>
          <img src={imageSrc} alt={title} className="slider__image" />
          <div className="slider__content">
            <div className="slider__title">{title}</div>
            <p>{subtitle}</p>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="slider__content">
            <div className="slider__title">{title}</div>
            <p>{subtitle}</p>
          </div>
          <img src={imageSrc} alt={title} className="slider__image" />
        </>
      );
    }
  };

  return (
    <div ref={ref} className={inView ? 'slider slider--zoom' : 'slider'}>
      {renderContent()}
    </div>
  );
};

export default Slider;
