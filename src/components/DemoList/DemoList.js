import React from 'react';
import DemoCard from './components/DemoCard';


const DemoList = ({ demoData, selectDemo }) => {
  return (
    <div className="demo-list__wrapper">
      <div className="demo-list__container">
        <h2 className="demo-list__title">Select a demo</h2>
          {demoData && demoData.map((demo, idx) =>
            <DemoCard selectDemo={selectDemo} demo={demo} key={`democard-${idx+1}`}/>
          )}
      </div>
    </div>
  );
}

export default DemoList;
