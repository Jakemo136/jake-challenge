import React from 'react';
import Summary from './Summary';
import getSlideImage from '../../../shared/helpers/getSlideImage';


const SlideWindow = ({ currentSlide, endPresentation, presentationSummary, resetDemo }) => {
  const { slideContent } = currentSlide;
  const SlideImage = getSlideImage(slideContent);
  const buttonClass = presentationSummary ?
    'slide-window__button slide-window__button--reset' :
    'slide-window__button slide-window__button--stop';
  const buttonText = presentationSummary ? 'Start new demo' : 'End presentation';
  const buttonFunction = presentationSummary ? resetDemo : endPresentation;

  return (
    <div className="slide-window__container">
      <div className="slide-window__main-window">
        {!presentationSummary &&
          <div className="slide-window__active-slide">
            <SlideImage className="slide-window__active-slide-image" />
          </div>
        }
        {presentationSummary &&
          <Summary presentationSummary={presentationSummary} />
        }
      </div>
      <div className="slide-window__control-bar">
        <button
          className={buttonClass}
          onClick={() => buttonFunction()}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default SlideWindow;
