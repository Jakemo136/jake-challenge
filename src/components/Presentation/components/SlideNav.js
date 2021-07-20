import React from 'react';
import getSlideImage from '../../../shared/helpers/getSlideImage';


const SlideNav = ({ orderedSlides, currentSlide, selectSlide, navDisabled }) => {
  const navClassName = navDisabled ?
    'slide-nav__container slide-nav__container--disabled' :
    'slide-nav__container';

  return (
    <div className={navClassName}>
      {orderedSlides && orderedSlides.map((slide) => {
        const { slideContent, order, id } = slide;
        const SlideIcon = getSlideImage(slideContent);
        const slideClassName = currentSlide.id === id ?
          'slide-nav__slide-thumbnail slide-nav__slide-thumbnail--active' :
          'slide-nav__slide-thumbnail';

        return (
          <div key={`thumbnail-${order}`}>
          {!navDisabled &&
            <button
              className={slideClassName}
              onClick={() => selectSlide(slide)}
            >
              <SlideIcon className="slide-nav__slide-thumbnail-icon" />
            </button>
          }
          {navDisabled &&
            <div
              className="slide-nav__slide-thumbnail slide-nav__slide-thumbnail--disabled"
            >
              <SlideIcon className="slide-nav__slide-thumbnail-icon" />
            </div>
          }
          </div>
        )}
      )}
    </div>
  );
}

export default SlideNav;
