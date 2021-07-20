import React from 'react';


const Summary = ({presentationSummary}) => {
  const { presentationTime, slideTimes } = presentationSummary;

  return (
    <div className="summary__container">
      <h3 className="summary__title">
        Presentation Summary
      </h3>
      <div className="summary__presentation-time">
        Total presentation time:&nbsp;
        {presentationTime}
      </div>
      <div className="summary__slide-times">
        Slide times:
        {slideTimes.map((slideTime, idx) => {
          const { slide, time } = slideTime;

          return (
            <div className="summary__slide-info" key={`slide-${idx+1}`}>
              <div className="summary__slide-name">Slide: {slide}</div>
              <div className="summary__slide-time">Time: {time}</div>
            </div>
          )}
        )}
      </div>
    </div>
  );
}

export default Summary;
