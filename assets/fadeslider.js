class FadeSlider {
    constructor(sliderElement, interval = 3000) {
      this.slider = sliderElement;
      this.slides = this.slider.querySelectorAll('.fade_slide');
      this.currentIndex = 0;
      this.totalSlides = this.slides.length;
      this.interval = interval;
      this.startSlider();
    }
  
    showSlide(index) {
      this.slides.forEach((slide, i) => {
        slide.classList.remove('show');
        if (i === index) {
          slide.classList.add('show');
        }
      });
      this.triggerSlideChange(index); // Trigger the custom event
    }
  
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
      this.showSlide(this.currentIndex);
    }
  
    startSlider() {
      this.showSlide(this.currentIndex); // Show the first slide initially
      this.autoSlide = setInterval(() => this.nextSlide(), this.interval);
    }
  
    stopSlider() {
      clearInterval(this.autoSlide);
    }
  
    // Method to trigger custom event
    triggerSlideChange(activeIndex) {
      const event = new CustomEvent('slideChange', {
        detail: { activeIndex }
      });
      this.slider.dispatchEvent(event);
    }
  
    // Add a method to listen for the custom event
    onSlideChange(listener) {
      this.slider.addEventListener('slideChange', listener);
    }
  }