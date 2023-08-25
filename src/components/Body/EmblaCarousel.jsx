import {CDN_URL} from '../../uitils/config';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import {useEffect} from 'react';

const EmblaCarousel = (props) => {
  const {carousel, options} = props;

  const autoplayOptions = {
    delay: 3000,
    rootNode: (emblaRoot) => emblaRoot.parentElement,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  };

  const [emblaRef] = useEmblaCarousel(options, [
    Autoplay(autoplayOptions),
  ]);

  const doubleCarousel = [
    ...carousel,
    ...carousel,
    ...carousel,
    ...carousel,
  ];
  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {doubleCarousel.map((item) => (
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
