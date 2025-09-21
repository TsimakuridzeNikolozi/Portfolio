export const hidePreloader = () => {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;
  preloader.classList.add('preloader--hide');
  preloader.addEventListener(
    'transitionend',
    () => {
      preloader.parentElement?.removeChild(preloader);
      setTimeout(() => {
        document.body.classList.remove('scroll-disabled');
      }, 350);
    },
    { once: true },
  );
};
