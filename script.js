document.addEventListener('DOMContentLoaded', function() {
    let currentActive = document.querySelector('.nav-link.active');
    let isTransitioning = false;
  
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        if (isTransitioning || this === currentActive) return;
        
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(`${targetId}-section`);
  
        isTransitioning = true;
        
        // Toggle active classes
        currentActive.classList.remove('active');
        document.querySelector('.content-section.active').classList.remove('active');
        
        this.classList.add('active');
        targetSection.classList.add('active');
  
        currentActive = this;
        
        // Reset flag after transition
        setTimeout(() => {
          isTransitioning = false;
        }, 300);
      });
    });


    const bouncyElements = document.querySelectorAll(".bouncy-text");

    bouncyElements.forEach(el => {
      setInterval(() => {
        el.classList.remove("animate__pulse");
        void el.offsetWidth; // trigger reflow
        el.classList.add("animate__pulse");
      }, 1800);
    });

  });