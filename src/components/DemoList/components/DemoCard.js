import React from 'react';


const DemoCard = ({ demo, selectDemo }) => {
  const { id, name, slides } = demo;
  const slideCount = slides.length;

  return (
    <div className="demo-list__demo" key={`demo-${id}`}>
      <div className="demo-list__demo-info">
        <div className="demo-list__demo-name">
          {name}
        </div>
        <div className="demo-list__demo-slide-count">
          Slides: {slideCount}
        </div>
      </div>
      <button className="demo-list__demo-start-button" onClick={() => {selectDemo(id)}}>
        Start Demo
      </button>
    </div>
  );
}

export default DemoCard;
