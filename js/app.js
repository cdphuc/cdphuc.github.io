document.addEventListener('DOMContentLoaded', function () {
  const scrollToTopLink = document.querySelector('.navbar__name a');
  const contactNameLink = document.querySelector('.contact__name a');

  scrollToTopLink.addEventListener('click', function (event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  contactNameLink.addEventListener('click', function (event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});

window.onbeforeunload = function () {
  location.reload();
};

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

document.addEventListener('DOMContentLoaded', function () {
  // Lấy tất cả social links
  const socialLinks = document.querySelectorAll('.social__link');

  // Disable tất cả social links ban đầu
  function disableSocialLinks() {
    socialLinks.forEach(link => {
      link.classList.add('link-disabled');
    });
  }

  // Enable social links
  function enableSocialLinks() {
    socialLinks.forEach(link => {
      link.classList.remove('link-disabled');
    });
  }

  // Disable ngay khi trang load
  disableSocialLinks();

  // Tính thời gian animation của social bar
  // 1.5s delay + 0.5s animation duration
  const socialBarAnimationTime = 2000;

  // Enable sau khi animation hoàn thành
  setTimeout(() => {
    enableSocialLinks();
  }, socialBarAnimationTime);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const targetElement = document.querySelector(this.getAttribute('href'));
    const headerOffset = document.querySelector('header').offsetHeight;
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});





