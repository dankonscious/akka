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
                    m = window.pageYOffset,
                    s = window.pageYOffset;
console.log(e.offsetTop);
                    console.log(m);
                
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
    document.querySelectorAll(e).forEach(e => {
        let t = e.closest(".shopify-section"),
            i = -Math.abs(t.getBoundingClientRect().height / 4);
        t.style.position = "sticky", t.style.top = `${i}px`
    });

    // Add window resize event listener
    function handleResize() {
        document.querySelectorAll(e).forEach(el => {
            let section = el.closest(".shopify-section");
            if (window.innerWidth < 1200) {
                section.style.position = "";
                section.style.top = "";
            } else {
                let offset = -Math.abs(section.getBoundingClientRect().height / 4);
                section.style.position = "sticky";
                section.style.top = `${offset}px`;
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
}), document.addEventListener("DOMContentLoaded", function() {
    var e = document.getElementById("nav-icon"),
        t = document.getElementById("nav-box");
    e.addEventListener("click", function() {
        e.classList.toggle("open"), t.classList.toggle("open")
    })
});