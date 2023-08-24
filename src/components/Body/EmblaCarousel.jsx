import {CDN_URL} from '../../uitils/config';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import {useEffect} from 'react';

const EmblaCarousel = (props) => {
  const {carousel, options} = props;
  const [emblaRef] = useEmblaCarousel(options);
  console.log(carousel);
  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {carousel.map((item) => (
            <div className="embla__slide">
              <img
                className="embla__slide__img"
                src={CDN_URL + item.imageId}
                alt="Your alt text"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
