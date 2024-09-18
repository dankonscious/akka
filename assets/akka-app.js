class FadeSlider {
  constructor(e, t = 3e3) {
      this.slider = e, this.slides = this.slider.querySelectorAll(".fade_slide"), this.currentIndex = 0, this.totalSlides = this.slides.length, this.interval = t, this.startSlider()
  }
  showSlide(e) {
      this.slides.forEach((t, i) => {
          t.classList.remove("show"), i === e && t.classList.add("show")
      }), this.triggerSlideChange(e)
  }
  nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.totalSlides, this.showSlide(this.currentIndex)
  }
  startSlider() {
      this.showSlide(this.currentIndex), this.autoSlide = setInterval(() => this.nextSlide(), this.interval)
  }
  stopSlider() {
      clearInterval(this.autoSlide)
  }
  triggerSlideChange(e) {
      let t = new CustomEvent("slideChange", {
          detail: {
              activeIndex: e
          }
      });
      this.slider.dispatchEvent(t)
  }
  onSlideChange(e) {
      this.slider.addEventListener("slideChange", e)
  }
}
class ParallaxEffect {
  constructor() {
      this.parallaxImages = document.querySelectorAll(".parallax-image"), this.initParallax(), this.parallaxAnimate()
  }
  initParallax() {
      let e = () => {
          this.parallaxImages.forEach(e => {
              let t = parseFloat(e.getAttribute("data-speed")),
                  i = parseFloat(e.getAttribute("data-stop")),
                  a = e.getAttribute("data-direction"),
                  l = window.pageYOffset;
              i && l * t >= i || (e.style.transform = "translateY(" + ("up" === a ? -1 : 1) * l * t + "px)")
          }), requestAnimationFrame(e)
      };
      requestAnimationFrame(e)
  }
  parallaxAnimate() {
      let e = document.querySelectorAll(".parallax-animate");
      e.forEach(e => {
          let t = e.getAttribute("data-onload");
          t && !isNaN(t) && setTimeout(() => {
              e.classList.add("active")
          }, parseInt(t, 10))
      }), window.addEventListener("scroll", () => {
          let t = window.scrollY + window.innerHeight / 2;
          e.forEach(e => {
              let i = e.getAttribute("data-onload");
              if (i && !isNaN(i)) return;
              let a = e.offsetTop - 200,
                  l = a + e.offsetHeight;
              !e.classList.contains("active") && t >= a && t <= l && e.classList.add("active")
          })
      })
  }
}

function adjustSticky(e) {
  let t = document.querySelectorAll(e);
  t.forEach(e => {
      let g = e.closest('.shopify-section');
      let t = g.getBoundingClientRect(),
          i = -Math.abs(t.height / 4);
      e.style.position = 'sticky';
      e.style.top = `${i}px`
  })
}

function renderTemplates() {
  let e = document.querySelectorAll('script[type="text/x-handlebars-template"]');
  e.forEach(e => {
      let t = e.innerHTML,
          i = document.querySelector(".handlebar-template-compiled"),
          a = Handlebars.compile(t),
          l = a();
      if (l.trim()) {
          let s = `<div class="handlebar-template-compiled">${l}</div>`;
          i && i.remove(), e.insertAdjacentHTML("afterend", s)
      }
  })
}
document.addEventListener("DOMContentLoaded", () => {
  new ParallaxEffect
}), document.addEventListener("DOMContentLoaded", () => {
  adjustSticky(".dynamic-sticky")
}), Handlebars.registerHelper("isMobile", function() {
  return window.matchMedia("(max-width: 1024px)").matches
}), renderTemplates(), window.addEventListener("resize", function() {
  renderTemplates()
});

document.addEventListener('DOMContentLoaded', function() {
  var navIcon = document.getElementById('nav-icon');
  var navBox = document.getElementById('nav-box');

  navIcon.addEventListener('click', function() {
      navIcon.classList.toggle('open');
      navBox.classList.toggle('open');
  });
});