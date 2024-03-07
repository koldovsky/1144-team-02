function getRandomColor() {
  const colors = ['#808080', '#FFFF00', '#FFFFFF'];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

function changeMeetOurTeamColorRandomly() {
  const meetOurTeam = document.querySelector('.team__subtitle');
  const randomColor = getRandomColor();
  meetOurTeam.style.color = randomColor;
};

changeMeetOurTeamColorRandomly();