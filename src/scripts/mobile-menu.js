export default function mobileMenu() {
  const toggle = document.querySelector('[data-anime="mobile-toggle"]');
  const mobileBody = document.querySelector('[data-anime="mobile-body"]');
  const menu = document.querySelector('[data-anime="mobile-menu"]');

  // handle menu mobile activation on click in burguer menu icon
  function handleMenuMobileActive() {
    menu.classList.toggle("active");
    mobileBody.classList.toggle("menu-active");
    toggle.classList.toggle("active");
  }

  // handle menu mobile desactivation on click in hero body
  function handleMenuMobileInactive() {
    menu.classList.remove("active");
    mobileBody.classList.remove("menu-active");
    toggle.classList.remove("active");
  }

  toggle.addEventListener("click", handleMenuMobileActive);
  mobileBody.addEventListener("click", handleMenuMobileInactive);
}
