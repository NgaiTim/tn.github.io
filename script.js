function blowCandle() {
  const flames = document.querySelectorAll('.flame');
  flames.forEach(flame => flame.style.display = 'none');
  alert("Happy Birthday Suri!!!🎉");
  launchStreamers();
}

function launchStreamers() {
  const container = document.getElementById('streamers');

  for (let i = 0; i < 75; i++) {
    setTimeout(() => {
      const streamer = document.createElement('div');
      streamer.classList.add('streamer');

      const randomX = Math.floor(Math.random() * window.innerWidth);
      streamer.style.left = `${randomX}px`;


      const depth = Math.floor(Math.random() * 3) + 1;
      streamer.style.zIndex = depth;
      streamer.style.transform = `scale(${0.6 + depth * 0.2})`;
      streamer.style.opacity = `${0.5 + depth * 0.2}`;

      streamer.style.backgroundColor = getRandomColor();

      container.appendChild(streamer);

      setTimeout(() => {
        streamer.remove();
      }, 2500);
    }, i * 50); 
  }
}

function getRandomColor() {
  const colors = ['#ff4081', '#ffeb3b', '#4caf50', '#2196f3', '#ff9800'];
  return colors[Math.floor(Math.random() * colors.length)];
}