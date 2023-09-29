// Function to start playing music and display dancers
function playMusic() {
  document.getElementById('music').play();  // Play music
  document.getElementById('background-video').play();  // Play background video
  document.getElementById('dancers').style.display = 'block';  // Display dancers
  var dancers = document.getElementsByClassName('dancer');
  for(var i=0; i < dancers.length; i++) {
      dancers[i].classList.add('dancing');  // Start dancing animation
  }
}

// Function to stop playing music and hide dancers
function stopMusic() {
  document.getElementById('music').pause();  // Pause music
  document.getElementById('background-video').pause();  // Pause background video
  document.getElementById('dancers').style.display = 'none';  // Hide dancers
}

// This function is to ensure that video does not play before user interacts
document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById('background-video').pause();  // Pause background video on page load
});
