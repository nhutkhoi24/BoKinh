// ── Sticky Header: thêm class "scrolled" khi cuộn qua 80px ──
const header = document.querySelector('.site-header-vip');

window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ── Smooth scroll cho các link nav ──
document.querySelectorAll('.nav-vip a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ── Active nav link highlight khi cuộn qua section ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-vip a');

window.addEventListener('scroll', () => {
    const y = window.scrollY + 120;
    sections.forEach(section => {
        const id = section.getAttribute('id');
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (y >= top && y < top + height) {
            navLinks.forEach(link => link.classList.remove('active'));
            const active = document.querySelector(`.nav-vip a[href="#${id}"]`);
            if (active) active.classList.add('active');
        }
    });
});

// ── Scroll reveal animations ──
const revealEls = document.querySelectorAll(
    '.about-preview, .services-preview, .projects-section, .mascot-section, .contact-section'
);

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

revealEls.forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
});
