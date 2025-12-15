// Editorial Hero Section - Minimal Interactions

document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for scroll indicator
  const scrollIndicator = document.querySelector('.hero-scroll-indicator');
  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    });
  }

  // Parallax effect for hero image on scroll
  const heroImage = document.querySelector('.hero-image__main');
  if (heroImage) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * 0.3;
      if (heroImage) {
        heroImage.style.transform = `translateY(${rate}px)`;
      }
    });
  }

  // Add subtle hover effect to navigation items
  const navItems = document.querySelectorAll('.hero-nav__item');
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      console.log('Navigation item clicked:', e.target.textContent);
    });
  });

  // Log button clicks
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      console.log('Button clicked:', e.target.textContent);
    });
  });
});
