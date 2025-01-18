
// Particle Effect Functionality
const particleContainer = document.getElementById('particles');
const numberOfParticles = 50;

document.addEventListener('mousemove', (event) => {
    createParticle(event.pageX, event.pageY);
});
document.addEventListener('touchmove', (event) => {
    // Get the touch coordinates (the first touch if multiple are detected)
    const touch = event.touches[0];
    createParticle(touch.pageX, touch.pageY);
});
function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = `${x - 5}px`;
    particle.style.top = `${y - 5}px`;

    // Randomize direction
    const directionX = Math.random() * 2 - 1; // Between -1 and 1
    const directionY = Math.random() * 2 - 1; // Between -1 and 1
    const distance = Math.random() * 50 + 50; // Randomize particle distance

    // Set CSS variables for the animation
    particle.style.setProperty('--x', `${directionX * distance}px`);
    particle.style.setProperty('--y', `${directionY * distance}px`);

    particleContainer.appendChild(particle);

    // Remove particle after animation
    setTimeout(() => {
        particle.remove();
    }, 1500); // Particle will disappear after 1.5s
}
function toggleMenu() { var menu = document.getElementById('navMenu'); if (menu.style.display === 'block') { menu.style.display = 'none'; } else { menu.style.display = 'block'; } }

// JavaScript for the Progress Bar
// JavaScript for the Progress Bar
window.onscroll = function() {
    showProgressBar();
    updateProgressBar();
};

function updateProgressBar() {
    // Calculate the scroll position
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    let pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    // Calculate percentage of page scrolled
    let scrollPercentage = (scrollPosition / pageHeight) * 100;

    // Set the height of the progress bar
    document.getElementById('progress-bar').style.height = scrollPercentage + '%';
}

function showProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    if (!progressBar.classList.contains('visible')) {
        progressBar.classList.add('visible');
    }
}

// JavaScript for Scroll Navigation
document.getElementById('home-nav').addEventListener('click', function() {
          document.getElementById('intro-section').scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          });
      });
      
      document.getElementById('about-nav').addEventListener('click', function() {
          document.getElementById('boxes-section').scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          });
      });
      
      document.getElementById('projects-nav').addEventListener('click', function() {
          document.getElementById('projects-section').scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          });
      });
      
      document.getElementById('collage-nav').addEventListener('click', function() {
          document.getElementById('collage-section').scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          });
      });
      
      document.getElementById('connect-nav').addEventListener('click', function() {
          document.getElementById('social-icons').scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          });
      });
      