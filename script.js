
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
    
    
  
    // ------------------------------------


/* script.js */
const fireflyParticles = document.getElementById('firefly-particles');
const numFireflies = 50; // Number of fireflies

function createFirefly() {
    const firefly = document.createElement('div');
    firefly.classList.add('firefly');

    // Random position and animation delay
    const xPos = Math.random() * 90; // 0-100vw
    const yPos = Math.random() * 90; // 0-100vh
    const animationDelay = Math.random() * 8; // Random delay (matches animation duration)

    firefly.style.left = xPos + 'vw';
    firefly.style.top = yPos + 'vh';
    firefly.style.animationDelay = animationDelay + 's';

    fireflyParticles.appendChild(firefly);

    // Optional: Remove firefly after animation completes (for long animations/continuous stream)
    firefly.addEventListener('animationend', () => {
        // firefly.remove(); // Uncomment if needed
    });
}

// Create initial fireflies
for (let i = 0; i < numFireflies; i++) {
    createFirefly();
}

// Optional: Create fireflies continuously
/*
setInterval(createFirefly, 200); // Create a new firefly every 200ms
*/

// @media (max-width: 480px) {
//     .container {
//         width: 100%;
//         overflow: hidden; /* Hide overflow to only show one container at a time */
//     }

//     .row-wrapper {
//         display: flex;
//         justify-content: flex-start;
//         align-items: center;
//         height: 100%;
//         animation: scroll 10s linear infinite; /* Faster horizontal scroll (10 seconds) */
//     }


//     .row {
//         display: flex;
//         padding: 0;
//         width: calc(100vw * 9); /* Ensure width is large enough for 3 cards */
//     }

//     .card {
//         flex-shrink: 0;
//         width: 100vw; /* Full width of the viewport, one card per screen */
//         margin: 0; /* No margin between cards to avoid extra space */
//         text-align: center;
    
//         box-sizing: border-box;
//         padding: 20px;
//         font-size: 14px;
//     }
//   }
//   /* General styles for upper row */
// .upper-row {
//     display: flex;
//     flex-wrap: nowrap;
//     justify-content: space-between;
//     padding: 20px;
// }

// .upper-row .card {
//     width: 200px; /* Original width */
//     margin: 10px; /* Original margin */
//     background-color: #f0f0f0;
//     text-align: center;
//     padding: 20px;
//     font-size: 16px;
//     box-sizing: border-box;
// }