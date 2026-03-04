document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Active navigation on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section, .hero');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Animate skill bars on scroll
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-bar-fill');
            skillBars.forEach(bar => {
                bar.style.width = bar.parentElement.previousElementSibling.querySelector('span:last-child').textContent;
            });
        }
    });
}, observerOptions);

const skillsSection = document.querySelector('#skills');
if (skillsSection) {
    observer.observe(skillsSection);
}


// Video popup
const modal = document.getElementById("videoModal");
const video = document.getElementById("projectVideo");
const videoSource = document.getElementById("videoSource");
const closeBtn = document.querySelector(".close-modal");

// Project cards
// const qualityProject = document.getElementById("qualityProject");
// const carpoolProject = document.getElementById("carpoolProject");

// Quality Management Video
// qualityProject.addEventListener("click", function () {
//     videoSource.src = "/videos/qualitymanegement.mp4";
//     video.load();
//     modal.style.display = "flex";
// });

// // Carpool Video
// carpoolProject.addEventListener("click", function () {
//     videoSource.src = "/videos/carpool.mp4";
//     video.load();
//     modal.style.display = "flex";
// });

// Close button
closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
    video.pause();
});

// Click outside modal
window.addEventListener("click", function (e) {
    if (e.target === modal) {
        modal.style.display = "none";
        video.pause();
    }
});