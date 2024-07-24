const animatedDiv1 = document.querySelector('.project1');
const aboutDiv = document.querySelector('.about-sec');
const aboutpara = document.querySelector('#about-content');
const animatedDiv2 = document.querySelector('.project2');
const animatedDiv3 = document.querySelector('.project3');
const animatedDiv4 = document.querySelector('.project4');
const section = document.querySelector('.projects');


window.addEventListener('scroll', () => {
    const sectionTop = aboutDiv.offsetTop;
  const windowHeight = window.innerHeight;
  const scrollPosition = window.scrollY;


  if (scrollPosition > sectionTop - windowHeight) {
   aboutpara.classList.add('animate-para');
  }else{
    aboutpara.classList.remove('animate-para');
  }
})
window.addEventListener('scroll', () => {
  const sectionTop = section.offsetTop+100;
  const windowHeight = window.innerHeight;
  const scrollPosition = window.scrollY;


  if (scrollPosition > sectionTop - windowHeight) {
    animatedDiv1.classList.add('animated1');
    animatedDiv2.classList.add('animated2');
    animatedDiv3.classList.add('animated3');
    animatedDiv4.classList.add('animated4');
    animatedDiv1.classList.remove('hidepr'); 
    animatedDiv2.classList.remove('hidepr'); 
    animatedDiv3.classList.remove('hidepr'); 
    animatedDiv4.classList.remove('hidepr'); 
  }else{
    animatedDiv1.classList.remove('animated1'); 
    animatedDiv2.classList.remove('animated2'); 
    animatedDiv3.classList.remove('animated3'); 
    animatedDiv4.classList.remove('animated4'); 
    animatedDiv1.classList.add('hidepr'); 
    animatedDiv2.classList.add('hidepr'); 
    animatedDiv3.classList.add('hidepr'); 
    animatedDiv4.classList.add('hidepr'); 
  }
});
