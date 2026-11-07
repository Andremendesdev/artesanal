import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const menuButton = document.querySelector<HTMLButtonElement>('.menu-toggle');
const mobileMenu = document.querySelector<HTMLElement>('.mobile-menu');
function closeMenu() {
  if (!menuButton || !mobileMenu) return;
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Abrir menu');
  mobileMenu.hidden = true;
}
menuButton?.addEventListener('click', () => {
  if (!mobileMenu) return;
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  mobileMenu.hidden = !open;
});
mobileMenu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.from('.hero-kicker, .hero-title, .hero-bottom', { opacity: 0, y: 28, duration: 0.9, stagger: 0.16, ease: 'power2.out', delay: 0.15 });
  gsap.utils.toArray<HTMLElement>('.reveal').forEach((element) => {
    gsap.from(element, { opacity: 0, y: 38, duration: 0.9, ease: 'power2.out', scrollTrigger: { trigger: element, start: 'top 88%', once: true } });
  });
  gsap.utils.toArray<HTMLElement>('.portfolio-item').forEach((element, index) => {
    gsap.from(element, { opacity: 0, y: 32, duration: 0.8, delay: index * 0.08, ease: 'power2.out', scrollTrigger: { trigger: element, start: 'top 90%', once: true } });
  });
}
