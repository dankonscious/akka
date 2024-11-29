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
                    s = window.pageYOffset;
                
        
                i && s * t >= i || (e.style.transform = "translateY(" + ("up" === a ? -1 : 1) * s * t + "px)");
            });
            requestAnimationFrame(e);
        };
        requestAnimationFrame(e);        
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
                    s = a + e.offsetHeight;
                !e.classList.contains("active") && t >= a && t <= s && e.classList.add("active")
            })
        })
    }
}

function adjustSticky(e) {
   

    // Add window resize event listener
    function handleResize() {
        document.querySelectorAll(e).forEach(el => {
            let section = el.closest(".shopify-section");
            let m = el.getAttribute('data-full-m');
            if (window.innerWidth < 1200) {
              console.log('working');
              if ( m ) {
                let offset = -section.getBoundingClientRect().height;
                section.style.position = "sticky";
                section.style.top = `${offset}px`;
              } else {
                section.style.position = "";
                section.style.top = "";
              }
            } else {
               if ( m ) {
                 
               } else {
                let offset = -Math.abs(section.getBoundingClientRect().height / 4);
                section.style.position = "sticky";
                section.style.top = `${offset}px`;
               }
               
            }
        });
    }

    // Initial check
    handleResize();

    // Update on resize
    window.addEventListener('resize', handleResize);
}


function renderTemplates() {
    document.querySelectorAll('script[type="text/x-handlebars-template"]').forEach(e => {
        let t = e.innerHTML,
            i = document.querySelector(".handlebar-template-compiled"),
            a = Handlebars.compile(t)();
        if (a.trim()) {
            let s = `<div class="handlebar-template-compiled">${a}</div>`;
            i && i.remove();
            e.insertAdjacentHTML("afterend", s);

            // Dispatch a custom event after the HTML change
            const event = new Event('htmlContentChanged');
            document.dispatchEvent(event);
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    new ParallaxEffect();
});

document.addEventListener("DOMContentLoaded", () => {
    adjustSticky(".dynamic-sticky");
});

Handlebars.registerHelper("isMobile", function() {
    return window.matchMedia("(max-width: 1024px)").matches;
});

renderTemplates();

/*
window.addEventListener("resize", () => {
    renderTemplates();
});*/

document.addEventListener("DOMContentLoaded", () => {
    const navIcon = document.getElementById("nav-icon");
    const navBox = document.getElementById("nav-box");

    navIcon.addEventListener("click", () => {
        navIcon.classList.toggle("open");
        navBox.classList.toggle("open");
    });
});


var rellax = new Rellax('.rellax');



// Get the query parameter from the URL
var qparam = window.location.search.replace('?', '');
// Select all anchor elements and elements with the data-link attribute
var els = document.querySelectorAll("a, [data-link]");

if (qparam) {
  // Loop through each element and update the href or data-link
  els.forEach(function(element) {
    // Check if the element is an anchor (has an href) or has a data-link attribute
    var currentUrl = element.tagName.toLowerCase() === 'a' ? 
                     element.getAttribute('href') : 
                     element.getAttribute('data-link');
  
    // If there is a URL or data-link value and it does not contain a '#', update it
    if (currentUrl && !currentUrl.includes('#')) {
      // If the current URL already has a query string, append the new parameter
      if (currentUrl.includes('?')) {
        currentUrl += '&' + qparam;
      } else {
        currentUrl += '?' + qparam;
      }
  
      // Set the updated URL back to href or data-link
      if (element.tagName.toLowerCase() === 'a') {
        element.setAttribute('href', currentUrl);
      } else {
        element.setAttribute('data-link', currentUrl);
      }
    }
  });
}

