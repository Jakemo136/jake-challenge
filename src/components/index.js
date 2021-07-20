import React, { Component } from 'react'
import getElapsedTime from '../shared/helpers/getElapsedTime';
import getSlideOrder from '../shared/helpers/getSlideOrder';
import DemoList from './DemoList/DemoList';
import Presentation from './Presentation/Presentation';


class DemoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      presentation: {
        slides: [],
      },
      selectedDemo: null,
      demoData: {},
      currentSlide: null,
      presentationSummary: null,
    };

    this.selectDemo = this.selectDemo.bind(this);
    this.getDemoData = this.getDemoData.bind(this);
    this.selectSlide = this.selectSlide.bind(this);
    this.addTimestamp = this.addTimestamp.bind(this);
    this.endPresentation = this.endPresentation.bind(this);
    this.resetDemo = this.resetDemo.bind(this);
  }

  selectDemo(demoId) {
    this.startPresentation();

    const demoData = this.getDemoData(demoId);
    const { slides } = demoData;

    this.selectSlide(slides[0]);

    this.setState({
      selectedDemo: demoId,
      demoData,
    });
  }

  getDemoData(demoId) {
    const { demoData } = this.props;
    const currentDemo = demoData.find(demo => demo.id === demoId);
    const { slides } = currentDemo;

    currentDemo.slides = getSlideOrder(slides);

    return currentDemo;
  }

  addTimestamp(slideId) {
    const { presentation } = this.state;
    const newTimestamp = { slideId, time: new Date() };

    presentation.slides.push(newTimestamp);

    this.setState({
      presentation,
    });
  }

  selectSlide(slide) {
    this.addTimestamp(slide.id);

    this.setState({
      currentSlide: slide,
    });
  }

  startPresentation() {
    const { presentation } = this.state;

    presentation.startTime = new Date();

    this.setState({
      presentation,
    });
  }

  endPresentation() {
    const { presentation } = this.state;

    presentation.endTime = new Date();

    this.getTimeDetails();
    this.setState({
      presentation,
    });
  }

  getTimeDetails() {
    const { presentation: { startTime, endTime, slides } } = this.state;
    const presentationTimeValue = getElapsedTime(startTime, endTime)
    
    const slideTimes = slides.map((slide, idx) => {
      const slideStartTime = slide.time;
      const nextSlide = slides[idx + 1];
      const slideEndTime = nextSlide ? nextSlide.time : endTime

      return {
        slide: slide.slideId,
        time: getElapsedTime(slideStartTime, slideEndTime)
      }
    });

    const presentationSummary = {
      presentationTime: presentationTimeValue,
      slideTimes,
    }

    this.setState({
      presentationSummary,
    });
  }

  resetDemo() {
    this.setState({
      presentation: {
        slides: [],
      },
      selectedDemo: null,
      demoData: {},
      currentSlide: null,
      presentationSummary: null,
    });
  }

  render() {
    const { selectedDemo, currentSlide, presentationSummary } = this.state;
    const { demoData } = this.props;

    return (
      <div className="demo__container">
        {!selectedDemo &&
          <DemoList demoData={demoData} selectDemo={this.selectDemo} />
        }
        {selectedDemo &&
          <Presentation
            demoData={this.getDemoData(selectedDemo)}
            selectSlide={this.selectSlide}
            currentSlide={currentSlide}
            endPresentation={this.endPresentation}
            presentationSummary={presentationSummary}
            resetDemo={this.resetDemo}
          />
        }
      </div>
    );
  }
}

export default DemoContainer;
