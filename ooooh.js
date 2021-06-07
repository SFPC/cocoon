const shell = document.getElementById('shell');
const info = document.getElementById('info');

shell.addEventListener('touchstart', function(event) {
  info.classList.add('touched');
}, false);

shell.addEventListener('touchend', function(event) {
  if (info.classList.contains('touched')) {
    info.classList.remove('touched');
  }
}, false);

