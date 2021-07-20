const getSlideOrder = (slides) => {
  return slides.sort((slideA, slideB) => {
    return slideA.order > slideB.order ? 0 : -1;
  })
}

export default getSlideOrder;
