
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
        document.querySelector('.social-icons').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
    
    
    const grid = document.getElementById('dot-grid');

    // Create the dots
    const columns = 30; // Number of dots horizontally
    const rows = 50; // Number of dots vertically
    for (let i = 0; i < columns * rows; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        grid.appendChild(dot);
    }
    
    // Add hover effect with smooth transition
    let lastMouseMove = 0; // For throttling
    document.addEventListener('mousemove', (e) => {
        const now = Date.now();
        if (now - lastMouseMove < 30) return; // Throttle to reduce load (30ms interval)
        lastMouseMove = now;
    
        const dots = document.querySelectorAll('.dot');
        const rect = grid.getBoudingClientRect();
        dots.forEach((dot) => {
            const dotRect = dot.getBoundingClientRect();
            const dx = dotRect.x + dotRect.width / 2 - e.clientX;
            const dy = dotRect.y + dotRect.height / 2 - e.clientY;
            const distance = Math.sqrt(dx * dx + dy * dy);
    
            if (distance < 140) { // Glow effect threshold
                dot.style.transform = 'scale(1.1)';
                dot.style.backgroundColor = 'rgba(100, 100, 255, 0.5)'; // Bright glow
            } else {
                dot.style.transform = 'scale(1)';
                dot.style.backgroundColor = 'rgba(84, 84, 107, 0.5)';
            }
        });
    });
    