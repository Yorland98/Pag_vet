const logoText = document.getElementById('logoText');
if (logoText) {
    const logoTextContent = 'Centro Médico Veterinario';
    let j = 0;
    function logoTypeWriter() {
        if (j < logoTextContent.length) {
            logoText.textContent += logoTextContent.charAt(j);
            j++;
            setTimeout(logoTypeWriter, 60);
        }
    }
    setTimeout(logoTypeWriter, 250);
}
function renderRoute() {
    const hash = window.location.hash || "#inicio";
    app.innerHTML = routes[hash] || "<h2>Página no encontrada</h2>";    
    if (hash === "#inicio") {
        setTimeout(initCarousel, 100);
    }   
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
window.addEventListener("hashchange", renderRoute);
window.addEventListener("load", renderRoute);
let currentSlide = 0;
let carouselInterval;
function showSlide(n) {
    const slides = document.querySelectorAll('.carousel-item');
    if (!slides.length) return;
    slides[currentSlide].classList.remove('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}
function nextSlide() { 
    showSlide(currentSlide + 1); 
}
function initCarousel() {
    if (carouselInterval) {
        clearInterval(carouselInterval);
    }
    currentSlide = 0;
    carouselInterval = setInterval(nextSlide, 4000);
}
function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    const menuToggle = document.querySelector('.menu-toggle i');
    navbar.classList.toggle('active');
    if (navbar.classList.contains('active')) {
        menuToggle.classList.remove('fa-bars');
        menuToggle.classList.add('fa-times');
    } else {
        menuToggle.classList.remove('fa-times');
        menuToggle.classList.add('fa-bars');
    }
}
document.addEventListener('click', function(e) {
    const navbar = document.querySelector('.navbar');
    const menuToggle = document.querySelector('.menu-toggle');
    const menuIcon = document.querySelector('.menu-toggle i');
    if (e.target.closest('.navbar a')) {
        navbar.classList.remove('active');
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
    }
    if (!e.target.closest('.navbar') && !e.target.closest('.menu-toggle')) {
        if (navbar.classList.contains('active')) {
            navbar.classList.remove('active');
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        }
    }
});
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const navbar = document.querySelector('.navbar');
        const menuIcon = document.querySelector('.menu-toggle i');
        
        if (navbar.classList.contains('active')) {
            navbar.classList.remove('active');
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        }
    }
});
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.75)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'var(--blanco)';
        header.style.backdropFilter = 'none';
    }
});
function scrollToContact() {
    const footer = document.getElementById('contacto');
    if (footer) {
        footer.scrollIntoView({ behavior: 'smooth' });
    }
}
function scrollToServicios() {
    if (window.location.hash !== "#inicio") {
        window.location.hash = "#inicio";
        setTimeout(() => {
            const serviciosSection = document.getElementById('servicios');
            if (serviciosSection) {
                serviciosSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 200);
    } else {
        const serviciosSection = document.getElementById('servicios');
        if (serviciosSection) {
            serviciosSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
}
function scrollToInstalaciones() {
    if (window.location.hash !== "#inicio") {
        window.location.hash = "#inicio";
        setTimeout(() => {
            const instalacionesSection = document.getElementById('instalaciones');
            if (instalacionesSection) {
                instalacionesSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 200);
    } else {
        const instalacionesSection = document.getElementById('instalaciones');
        if (instalacionesSection) {
            instalacionesSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
}
function navigateToDetail(section) {
    window.location.hash = `#${section}`;
}
function handleVideo(videoId) {
    const video = document.getElementById(videoId);
    if (video) {
        video.loop = true;
        video.play();
        video.addEventListener('error', function(e) {
            console.error('Error al reproducir el video:', e);
        });
        video.addEventListener('ended', function() {
            console.log('Video terminado, reiniciando...');
        });
    } else {
        console.error('No se encontró el elemento de video con ID:', videoId);
    }
}
function showWhatsAppChatPopup() {
    const popup = document.getElementById('whatsappChatPopup');
    if (popup) {
        setTimeout(() => {
            popup.classList.add('show');
        }, 200);
        setTimeout(() => {
            if (popup.classList.contains('show')) {
                closeChatPopup();
            }
        }, 3000);
    }
}
function closeChatPopup() {
    const popup = document.getElementById('whatsappChatPopup');
    if (popup) {
        popup.classList.remove('show');
    }
}
document.addEventListener('DOMContentLoaded', function() {
    showWhatsAppChatPopup();
});
window.addEventListener('load', function() {
    showWhatsAppChatPopup();
});
document.addEventListener('click', function(event) {
    const popup = document.getElementById('whatsappChatPopup');
    const whatsappFloat = document.querySelector('.whatsapp-float');
    if (popup && popup.classList.contains('show')) {
        if (!popup.contains(event.target) && !whatsappFloat.contains(event.target)) {
            closeChatPopup();
        }
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const whatsappBtn = document.querySelector(".whatsapp-float");
    const footer = document.querySelector(".footer");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          whatsappBtn.style.display = "none";
        } else {
          whatsappBtn.style.display = "flex";
        }
      });
    }, { threshold: 0.1 });

    observer.observe(footer);
});