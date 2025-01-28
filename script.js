
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
        document.querySelector('.connect-section').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
    
    
    const container = document.getElementById('particle-container');
    const particleCount = 100; // Number of particles

    // Create particles
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        container.appendChild(particle);
        particles.push(particle);
    }

    let lastMoveTime = 0; // Throttle flag for mouse/touchmove

    // Store positions of particles
    const particlePositions = [];
    function positionParticles() {
        particles.forEach(particle => {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;
            particlePositions.push({ x, y });
        });
    }

    // General function for mousemove and touchmove
    function handleMovement(e) {
        const now = Date.now();
        if (now - lastMoveTime < 30) return; // Throttle the movement event
        lastMoveTime = now;

        // Handle mousemove or touchmove
        let mouseX, mouseY;

        if (e.type === 'mousemove') {
            mouseX = e.clientX;
            mouseY = e.clientY;
        } else if (e.type === 'touchmove' && e.touches.length > 0) {
            mouseX = e.touches[0].clientX;
            mouseY = e.touches[0].clientY;
        }

        // Animate particles on mouse/touch movement
        particles.forEach((particle, index) => {
            const dx = particlePositions[index].x - mouseX;
            const dy = particlePositions[index].y - mouseY;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // If particle is near the mouse/touch, enlarge and change color
            if (distance < 150) {
                particle.style.transform = 'scale(1.1)';
                particle.style.backgroundColor = 'rgba(247, 173, 13, 0.9)';
            } else {
                particle.style.transform = 'scale(1)';
                particle.style.backgroundColor = 'rgba(35, 35, 37, 0.7)';
            }
        });
    }

    // Listen for both mousemove and touchmove
    document.addEventListener('mousemove', handleMovement);
    document.addEventListener('touchmove', handleMovement);

    // Initialize particles' positions
    positionParticles();
    
    // Re-position particles when the window is resized
    window.addEventListener('resize', () => {
        positionParticles();
    });

    // ------------------------------------


/* script.js */
