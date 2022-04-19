function register () {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
    if (publicUrl.origin !== window.location.origin) {
      return;
    }

    window.addEventListener('install', (event) => {
      console.info('Service worker installed, oninstall fired');
      console.debug(event);
    });
    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/serviceWorker.js`;
    });
  }

  return;
}

function unregister() {
}

export {
  register,
  unregister
};
