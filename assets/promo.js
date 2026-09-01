/*
 * The countdown in the promo banner.
 *
 * The only script on the site, and it is deliberately small enough to read in one sitting. It
 * reads the device clock, writes a sentence into the banner and stops there: no cookie, no
 * storage, no network. A page whose claim is that nothing leaves the device cannot make an
 * exception for its own countdown, and the cookie policy says so in as many words.
 *
 * One file for both languages, so the two pages cannot drift apart: the sentences live in
 * data- attributes on the banner, which is the only part that differs between them.
 */

(function () {
  var banner = document.querySelector('.promo');
  if (!banner) return;

  var message = banner.querySelector('.promo-msg');
  var button = banner.querySelector('.promo-cta');
  if (!message || !banner.dataset.release) return;

  /* Both dates at local midnight, so the difference is a whole number of days and the hour the
   * page happens to be opened never rounds it the wrong way. */
  var parts = banner.dataset.release.split('-');
  var release = new Date(+parts[0], parts[1] - 1, +parts[2]);
  var now = new Date();
  var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  /* Math.round rather than floor: a daylight saving change makes one of these days 23 or 25
   * hours long, which would otherwise cost or add a day. */
  var days = Math.round((release - today) / 86400000);

  if (days > 1) {
    message.textContent = banner.dataset.soon.replace('{n}', days);
  } else if (days === 1) {
    message.textContent = banner.dataset.tomorrow;
  } else if (days === 0) {
    message.textContent = banner.dataset.today;
  } else {
    message.textContent = banner.dataset.out;
  }

  /* The Play listing does not exist until the app is published, so the button stays hidden
   * rather than pointing at a 404. */
  if (days <= 0 && button) button.hidden = false;
})();
