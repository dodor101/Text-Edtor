const butInstall = document.getElementById('buttonInstall');

// beforeinstallprompt
window.addEventListener('beforeinstallprompt', (event) => {
  window.deferredPrompt = event;
  butInstall.classList.toggle('hidden', false);
});
// handleclick
butInstall.addEventListener('click', async () => {
  console.log('Install button has been clicked');
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
    return;
  }

  promptEvent.prompt();

  window.deferredPrompt = null;

  butInstall.classList.toggle('hidden', true);
});
// after install
window.addEventListener('appinstalled', (event) => {
  window.deferredPrompt = null;
});
