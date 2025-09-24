// Function to get URL parameters
function getURLParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Function to personalize the letter content
function personalizeContent() {
    const recipientName = getURLParameter('name') || 'Hexe / Zauuberer';
    const eventName = getURLParameter('event') || 'Halloween Party';
    const eventDate = getURLParameter('date') || '31.10.2025';
    const eventTime = getURLParameter('time') || 'When the magic calls';
    const eventLocation = getURLParameter('location') || 'A place of wonder';
    const eventDetails = getURLParameter('details') || 'a magical gathering';

    // Update the letter content
    if(document.getElementById('recipientName')) document.getElementById('recipientName').textContent = recipientName;
    if(document.getElementById('eventName')) document.getElementById('eventName').textContent = eventName;
    if(document.getElementById('eventDate')) document.getElementById('eventDate').textContent = eventDate;
    if(document.getElementById('eventTime')) document.getElementById('eventTime').textContent = eventTime;
    if(document.getElementById('eventLocation')) document.getElementById('eventLocation').textContent = eventLocation;
    if(document.getElementById('eventDetails')) document.getElementById('eventDetails').textContent = eventDetails;
}

// Function to handle envelope opening
function openEnvelope() {
    const envelope = document.getElementById('envelope');
    const letterContainer = document.getElementById('letterContainer');
    const envelopeContainer = document.querySelector('.envelope-container');
    if (!envelope || !letterContainer || !envelopeContainer) return;

    // Add opening class to trigger flap animation
    envelope.classList.add('opening');

    // After a delay, show the letter and hide the envelope
    setTimeout(() => {
        letterContainer.classList.add('show');
        envelopeContainer.classList.add('hidden');
    }, 1000);
}

// Function to create magical particle effects
function createMagicalParticles() {
    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
        setTimeout(() => {
            createParticle();
        }, i * 100);
    }
}

function createParticle() {
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = '4px';
    particle.style.height = '4px';
    particle.style.background = '#FFD700';
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '100';

    // Random starting position around the envelope
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;

    particle.style.left = startX + 'px';
    particle.style.top = startY + 'px';

    document.body.appendChild(particle);

    // Animate particle
    const animationDuration = 2000 + Math.random() * 1000;
    const targetX = startX + (Math.random() - 0.5) * 200;
    const targetY = startY - 100 - Math.random() * 100;

    particle.animate([
        {
            transform: `translate(0, 0)`,
            opacity: 1
        },
        {
            transform: `translate(${targetX - startX}px, ${targetY - startY}px)`,
            opacity: 0
        }
    ], {
        duration: animationDuration,
        easing: 'ease-out'
    }).onfinish = () => {
        particle.remove();
    };
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Personalize content based on URL parameters
    personalizeContent();

    // Add click event to envelope
    const envelope = document.getElementById('envelope');
    if (envelope) {
        envelope.addEventListener('click', function() {
            openEnvelope();
            createMagicalParticles();
        });

        // Auto-open envelope after 10 seconds if not clicked (increased for testing)
        setTimeout(() => {
            if (!envelope.classList.contains('opening')) {
                openEnvelope();
                createMagicalParticles();
            }
        }, 10000);

        // Add some hover effects
        envelope.addEventListener('mouseenter', function() {
            if (!this.classList.contains('opening')) {
                createMagicalParticles();
            }
        });
    }
});

// Add some ambient magical effects
function createAmbientEffects() {
    setInterval(() => {
        if (Math.random() < 0.3) {
            createParticle();
        }
    }, 3000);
}

// Start ambient effects after a delay
setTimeout(createAmbientEffects, 5000);
