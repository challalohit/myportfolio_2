document.addEventListener('DOMContentLoaded', function() {
    // ScrollReveal animations
    ScrollReveal().reveal('.logo', { 
        delay: 200,
        distance: '50px',
        origin: 'top',
        easing: 'ease-in-out',
        duration: 1000
    });

    ScrollReveal().reveal('.links li', { 
        delay: 400,
        distance: '50px',
        origin: 'top',
        easing: 'ease-in-out',
        duration: 1000,
        interval: 200
    });

    ScrollReveal().reveal('.ph-con', { 
        delay: 600,
        distance: '50px',
        origin: 'bottom',
        easing: 'ease-in-out',
        duration: 1000
    });

    ScrollReveal().reveal('.pfp-m', { 
        delay: 800,
        distance: '50px',
        origin: 'left',
        easing: 'ease-in-out',
        duration: 1000
    });

    ScrollReveal().reveal('#soc', { 
        delay: 1000,
        distance: '50px',
        origin: 'right',
        easing: 'ease-in-out',
        duration: 1000
    });

    ScrollReveal().reveal('#skills h2', { 
        delay: 200,
        distance: '50px',
        origin: 'top',
        easing: 'ease-in-out',
        duration: 1000
    });

    ScrollReveal().reveal('#skills li', { 
        delay: 400,
        distance: '50px',
        origin: 'bottom',
        easing: 'ease-in-out',
        duration: 1000,
        interval: 200
    });

    ScrollReveal().reveal('#certifications h2', { 
        delay: 200,
        distance: '50px',
        origin: 'top',
        easing: 'ease-in-out',
        duration: 1000
    });

    ScrollReveal().reveal('.certification', { 
        delay: 400,
        distance: '50px',
        origin: 'bottom',
        easing: 'ease-in-out',
        duration: 1000,
        interval: 200
    });

    ScrollReveal().reveal('#contact h2', { 
        delay: 200,
        distance: '50px',
        origin: 'top',
        easing: 'ease-in-out',
        duration: 1000
    });

    ScrollReveal().reveal('#contact form', { 
        delay: 400,
        distance: '50px',
        origin: 'bottom',
        easing: 'ease-in-out',
        duration: 1000
    });

    // Modal functionality
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.getElementsByClassName('close')[0];

    document.querySelectorAll('.cert-img').forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
        });
    });

    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    // Initialize EmailJS
    emailjs.init("4InMGSsZXd7l9Ejak");

    // Handle form submission
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const sendButton = document.getElementById('send-button');
        sendButton.innerText = 'Sending...';
        sendButton.disabled = true;

        emailjs.sendForm('service_kysq6vx', 'template_9cta5cu', this)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                sendButton.innerText = 'Send';
                sendButton.disabled = false;
                alert('Message sent successfully!');
            }, function(error) {
                console.log('FAILED...', error);
                sendButton.innerText = 'Send';
                sendButton.disabled = false;
                alert('Failed to send message. Please try again.');
            });
    });
});
