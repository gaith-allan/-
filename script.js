document.addEventListener('DOMContentLoaded', function() {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const response = document.getElementById('response');
    const celebration = document.getElementById('celebration');
    
    // Yes button functionality
    yesBtn.addEventListener('click', function() {
        // Hide the buttons
        yesBtn.style.display = 'none';
        noBtn.style.display = 'none';
        
        // Show the response with celebration
        response.classList.add('show');
        
        // Add some extra celebration effects
        setTimeout(() => {
            createHearts();
        }, 500);
        
        // Play a celebration sound (if supported)
        playCelebrationSound();
    });
    
    // No button functionality - make it not work properly
    noBtn.addEventListener('click', function() {
        // Make the button "break" or move away
        noBtn.style.transform = 'translateX(100px)';
        noBtn.style.opacity = '0.3';
        
        // Reset after a short delay
        setTimeout(() => {
            noBtn.style.transform = 'translateX(0)';
            noBtn.style.opacity = '0.6';
        }, 1000);
        
        // Show a message that "No" is not an option
        showNoMessage();
    });
    
    // Create floating hearts effect
    function createHearts() {
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.innerHTML = '❤️';
                heart.style.position = 'fixed';
                heart.style.fontSize = '30px';
                heart.style.left = Math.random() * window.innerWidth + 'px';
                heart.style.top = window.innerHeight + 'px';
                heart.style.pointerEvents = 'none';
                heart.style.zIndex = '1000';
                heart.style.animation = 'floatUp 3s ease-out forwards';
                
                document.body.appendChild(heart);
                
                // Remove heart after animation
                setTimeout(() => {
                    if (heart.parentNode) {
                        heart.parentNode.removeChild(heart);
                    }
                }, 3000);
            }, i * 200);
        }
    }
    
    // Show message when "No" is clicked
    function showNoMessage() {
        const message = document.createElement('div');
        message.innerHTML = 'Sorry Mom, "No" is not an option! 😊';
        message.style.position = 'fixed';
        message.style.top = '50%';
        message.style.left = '50%';
        message.style.transform = 'translate(-50%, -50%)';
        message.style.background = 'rgba(255, 107, 107, 0.95)';
        message.style.color = 'white';
        message.style.padding = '20px 30px';
        message.style.borderRadius = '20px';
        message.style.fontSize = '1.2rem';
        message.style.fontWeight = '600';
        message.style.zIndex = '1001';
        message.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
        message.style.animation = 'fadeInOut 2s ease-in-out';
        
        document.body.appendChild(message);
        
        setTimeout(() => {
            if (message.parentNode) {
                message.parentNode.removeChild(message);
            }
        }, 2000);
    }
    
    // Play celebration sound (if supported)
    function playCelebrationSound() {
        // Create a simple beep sound using Web Audio API
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
            oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1); // E5
            oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2); // G5
            
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.5);
        } catch (e) {
            // Audio not supported, continue silently
        }
    }
    
    // Add CSS for floating hearts animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatUp {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
        
        @keyframes fadeInOut {
            0% {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0.8);
            }
            50% {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1.1);
            }
            100% {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0.8);
            }
        }
    `;
    document.head.appendChild(style);
    
    // Add some interactive hover effects
    yesBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05) rotate(2deg)';
    });
    
    yesBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
    
    // Add a subtle pulse to the yes button
    setInterval(() => {
        if (yesBtn.style.display !== 'none') {
            yesBtn.style.animation = 'pulse 2s ease-in-out';
        }
    }, 3000);
    
    // Add pulse animation
    const pulseStyle = document.createElement('style');
    pulseStyle.textContent = `
        @keyframes pulse {
            0% {
                box-shadow: 0 8px 25px rgba(255, 107, 107, 0.4);
            }
            50% {
                box-shadow: 0 8px 25px rgba(255, 107, 107, 0.8), 0 0 0 10px rgba(255, 107, 107, 0.1);
            }
            100% {
                box-shadow: 0 8px 25px rgba(255, 107, 107, 0.4);
            }
        }
    `;
    document.head.appendChild(pulseStyle);
});