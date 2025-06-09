document.addEventListener('DOMContentLoaded', function() {
  // Initialize all carousels
  const carousels = document.querySelectorAll('.carrossel-container');
  
  carousels.forEach(carousel => {
    const track = carousel.querySelector('.carrossel-track');
    const slides = Array.from(track.querySelectorAll('.carrossel-slide'));
    const nextBtn = carousel.querySelector('.next');
    const prevBtn = carousel.querySelector('.prev');
    
    const slideWidth = slides[0].getBoundingClientRect().width + 20; // 20px for margin
    let currentPosition = 0;
    let maxPosition = -(slideWidth * (slides.length - 5));
    
    // Set initial positions of slides
    slides.forEach((slide, index) => {
      slide.style.left = `${slideWidth * index}px`;
    });
    
    // Next button functionality
    nextBtn.addEventListener('click', function() {
      if (currentPosition > maxPosition) {
        currentPosition -= slideWidth;
        track.style.transform = `translateX(${currentPosition}px)`;
        track.style.transition = 'transform 0.5s ease';
      }
    });
    
    // Previous button functionality
    prevBtn.addEventListener('click', function() {
      if (currentPosition < 0) {
        currentPosition += slideWidth;
        track.style.transform = `translateX(${currentPosition}px)`;
        track.style.transition = 'transform 0.5s ease';
      }
    });
    
    // Touch and drag functionality
    let isDragging = false;
    let startPos = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    
    slides.forEach(slide => {
      // Touch events
      slide.addEventListener('touchstart', touchStart);
      slide.addEventListener('touchend', touchEnd);
      slide.addEventListener('touchmove', touchMove);
      
      // Mouse events
      slide.addEventListener('mousedown', touchStart);
      slide.addEventListener('mouseup', touchEnd);
      slide.addEventListener('mouseleave', touchEnd);
      slide.addEventListener('mousemove', touchMove);
    });
    
    function touchStart(e) {
      isDragging = true;
      startPos = getPositionX(e);
      prevTranslate = currentPosition;
      track.style.transition = 'none';
    }
    
    function touchEnd() {
      isDragging = false;
      const movedBy = currentTranslate;
      
      if (movedBy < -50 && currentPosition > maxPosition) {
        currentPosition -= slideWidth;
      }
      
      if (movedBy > 50 && currentPosition < 0) {
        currentPosition += slideWidth;
      }
      
      track.style.transform = `translateX(${currentPosition}px)`;
      track.style.transition = 'transform 0.5s ease';
      currentTranslate = 0;
    }
    
    function touchMove(e) {
      if (isDragging) {
        const currentPositionX = getPositionX(e);
        currentTranslate = currentPositionX - startPos;
        track.style.transform = `translateX(${prevTranslate + currentTranslate}px)`;
      }
    }
    
    function getPositionX(e) {
      return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
    }
    
    // Handle window resize
    window.addEventListener('resize', function() {
      const newSlideWidth = slides[0].getBoundingClientRect().width + 20;
      const positionRatio = currentPosition / slideWidth;
      currentPosition = positionRatio * newSlideWidth;
      maxPosition = -(newSlideWidth * (slides.length - 5));
      
      slides.forEach((slide, index) => {
        slide.style.left = `${newSlideWidth * index}px`;
      });
      
      track.style.transform = `translateX(${currentPosition}px)`;
      track.style.transition = 'transform 0.5s ease';
    });
  });
});