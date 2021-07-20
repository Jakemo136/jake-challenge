import React from 'react';
import getSlideOrder from '../../shared/helpers/getSlideOrder';
import SlideNav from './components/SlideNav';
import SlideWindow from './components/SlideWindow'


const Presentation = function PresentationComponent({
  demoData,
  currentSlide,
  selectSlide,
  endPresentation,
  presentationSummary,
  resetDemo,
}) {
  const { slides } = demoData;
  const orderedSlides = getSlideOrder(slides);

  return (
    <div className="presentation__container">
      <SlideNav
        orderedSlides={orderedSlides}
        currentSlide={currentSlide}
        selectSlide={selectSlide}
        navDisabled={!!presentationSummary}
      />
      <SlideWindow
        currentSlide={currentSlide}
        endPresentation={endPresentation}
        presentationSummary={presentationSummary}
        resetDemo={resetDemo}
      />
    </div>
  );
}

export default Presentation;
