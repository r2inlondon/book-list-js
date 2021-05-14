const videos = Array.from(document.querySelectorAll('.videos li'));

const times = videos.map((video) => {
  return parseFloat((video.dataset.time).replace(':','.'));
});

const totalTimes = times.reduce((total, num) => {
  return total + num;
});

console.log(totalTimes);
