const getElapsedTime = (startTime, endTime) => {
  const totalTime = (endTime.getTime() - startTime.getTime())/1000;

  const seconds = Math.round(totalTime % 60);
  const minutes = Math.round(Math.floor(totalTime / 60) % 60);

  return `${minutes} min, ${seconds} sec`;
}

export default getElapsedTime;
