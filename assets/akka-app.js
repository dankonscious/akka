class FadeSlider{constructor(t,e=3e3){this.slider=t,this.slides=this.slider.querySelectorAll(".fade_slide"),this.currentIndex=0,this.totalSlides=this.slides.length,this.interval=e,this.startSlider()}showSlide(t){this.slides.forEach((e,i)=>{e.classList.remove("show"),i===t&&e.classList.add("show")}),this.triggerSlideChange(t)}nextSlide(){this.currentIndex=(this.currentIndex+1)%this.totalSlides,this.showSlide(this.currentIndex)}startSlider(){this.showSlide(this.currentIndex),this.autoSlide=setInterval(()=>this.nextSlide(),this.interval)}stopSlider(){clearInterval(this.autoSlide)}triggerSlideChange(t){let e=new CustomEvent("slideChange",{detail:{activeIndex:t}});this.slider.dispatchEvent(e)}onSlideChange(t){this.slider.addEventListener("slideChange",t)}}class ParallaxEffect{constructor(){this.parallaxImages=document.querySelectorAll(".parallax-image"),this.initParallax(),this.parallaxAnimate()}initParallax(){let t=()=>{this.parallaxImages.forEach(t=>{let e=parseFloat(t.getAttribute("data-speed")),i=parseFloat(t.getAttribute("data-stop")),a=t.getAttribute("data-direction"),s=window.pageYOffset;(!i||!(s*e>=i))&&(t.style.transform="translateY("+("up"===a?-1:1)*s*e+"px)")}),requestAnimationFrame(t)};requestAnimationFrame(t)}parallaxAnimate(){let t=document.querySelectorAll(".parallax-animate");t.forEach(t=>{let e=t.getAttribute("data-onload");e&&!isNaN(e)&&setTimeout(()=>{t.classList.add("active")},parseInt(e,10))}),window.addEventListener("scroll",()=>{let e=window.scrollY+window.innerHeight/2;t.forEach(t=>{let i=t.getAttribute("data-onload");if(i&&!isNaN(i))return;let a=t.offsetTop-200,s=a+t.offsetHeight;!t.classList.contains("active")&&e>=a&&e<=s&&t.classList.add("active")})})}}document.addEventListener("DOMContentLoaded",()=>{new ParallaxEffect});document.addEventListener("DOMContentLoaded",function(){var e=document.getElementById("nav-icon"),n=document.getElementById("nav-box");e.addEventListener("click",function(){e.classList.toggle("open"),n.classList.toggle("open")})});function renderTemplates(){let e=document.querySelectorAll('script[type="text/x-handlebars-template"]');e.forEach(e=>{let t=e.innerHTML,n=document.querySelector(".handlebar-template-compiled"),r=Handlebars.compile(t),i=r();if(i.trim()){let l=`<div class="handlebar-template-compiled">${i}</div>`;n&&n.remove(),e.insertAdjacentHTML("afterend",l)}})}function adjustSticky(e){let t=document.querySelectorAll(e);t.forEach(e=>{let t=e.getBoundingClientRect();console.log(t.height);let n=-Math.abs(t.height/4);e.style.top=`${n}px`})}Handlebars.registerHelper("isMobile",function(){return window.matchMedia("(max-width: 1024px)").matches}),document.addEventListener("DOMContentLoaded",()=>{renderTemplates()}),window.addEventListener("resize",function(){renderTemplates()}),document.addEventListener("DOMContentLoaded",()=>{adjustSticky(".dynamic-sticky")});