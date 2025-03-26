document.addEventListener('DOMContentLoaded', () => {
    // Smooth reveal animation for page elements
    const revealElements = document.querySelectorAll('.hero, .card, .nav-section');
    
    revealElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 1s ease, transform 1s ease';
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, 100);
        }, index * 200);
    });
    
    // Parallax effect for the color splash
    const colorSplash = document.querySelector('.color-splash');
    
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        const moveX = (mouseX - 0.5) * 20;
        const moveY = (mouseY - 0.5) * 20;
        
        colorSplash.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`;
    });
    
    // Cursor trail effect (subtle)
    const cursorTrail = document.createElement('div');
    cursorTrail.classList.add('cursor-trail');
    document.body.appendChild(cursorTrail);
    
    let trailTimeout;
    document.addEventListener('mousemove', (e) => {
        cursorTrail.style.left = e.clientX + 'px';
        cursorTrail.style.top = e.clientY + 'px';
        cursorTrail.style.opacity = '1';
        
        clearTimeout(trailTimeout);
        trailTimeout = setTimeout(() => {
            cursorTrail.style.opacity = '0';
        }, 200);
    });
    
    // Contact modal functionality
    const contactBtn = document.getElementById('contact-btn');
    const contactModal = document.getElementById('contact-modal');
    const closeModal = document.querySelector('.close-modal');
    
    contactBtn.addEventListener('click', () => {
        contactModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
    
    closeModal.addEventListener('click', () => {
        contactModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === contactModal) {
            contactModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Copy button functionality
    const copyBtns = document.querySelectorAll('.copy-btn');
    
    copyBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const textToCopy = this.getAttribute('data-value');
            navigator.clipboard.writeText(textToCopy).then(() => {
                // Visual feedback
                this.textContent = 'Copied!';
                this.classList.add('copied');
                
                setTimeout(() => {
                    this.textContent = 'Copy';
                    this.classList.remove('copied');
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        });
    });
    
    // Navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navContent = document.querySelector('.nav-content');
    
    navToggle.addEventListener('click', () => {
        navContent.classList.toggle('show');
        if (navContent.classList.contains('show')) {
            navToggle.textContent = 'HIDE OPTIONS';
        } else {
            navToggle.textContent = 'EXPLORE MORE';
        }
    });
});