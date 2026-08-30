const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav');
menuBtn?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const reveals=document.querySelectorAll('.reveal');
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}})
},{threshold:.12});
reveals.forEach(el=>observer.observe(el));

const sections=document.querySelectorAll('section[id]');
const navLinks=document.querySelectorAll('.nav a');
window.addEventListener('scroll',()=>{
  let current='home';
  sections.forEach(section=>{if(scrollY>=section.offsetTop-180) current=section.id});
  navLinks.forEach(link=>link.classList.toggle('active',link.getAttribute('href')==='#'+current));
  document.querySelector('.back-top')?.classList.toggle('show',scrollY>600);
});

document.querySelector('.back-top')?.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));

const glow=document.querySelector('.cursor-glow');
window.addEventListener('pointermove',e=>{
  glow.style.left=e.clientX+'px';
  glow.style.top=e.clientY+'px';
});

document.querySelector('#contactForm')?.addEventListener('submit',e=>{
  e.preventDefault();
  const name=document.querySelector('#name').value.trim();
  const email=document.querySelector('#email').value.trim();
  const message=document.querySelector('#message').value.trim();
  const subject=encodeURIComponent('Portfolio enquiry from '+name);
  const body=encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href=`mailto:akasrienterprises@gmail.com?subject=${subject}&body=${body}`;
});
