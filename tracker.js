/* Visitor tracker - sends anonymous events to /.netlify/functions/track */
(function () {
  var URL = '/.netlify/functions/track';
  var vid; try { vid = localStorage.getItem('_vid'); if (!vid) { vid = Math.random().toString(36).slice(2, 12); localStorage.setItem('_vid', vid); } } catch (e) { vid = 'anon'; }
  var device = /Mobi|Android|iPhone/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop';
  function send(o) {
    o.vid = vid; o.device = device;
    try { var b = JSON.stringify(o); if (!(navigator.sendBeacon && navigator.sendBeacon(URL, b))) fetch(URL, { method: 'POST', body: b, keepalive: true }); } catch (e) {}
  }
  var ref = ''; try { ref = document.referrer ? new URL(document.referrer).hostname : ''; if (ref === location.hostname) ref = ''; } catch (e) {}
  send({ type: 'view', ref: ref || 'Direct' });
  document.addEventListener('click', function (e) {
    var t = e.target.closest && e.target.closest('.btn-details, .btn-whatsapp, a[href^="tel:"], a[href^="mailto:"], a[href*="wa.me"]');
    if (!t) return;
    var card = t.closest('.product-card');
    var title = card && card.querySelector('.product-tittle') ? card.querySelector('.product-tittle').textContent.trim() : '';
    if (t.classList.contains('btn-details')) {
      var m = (t.getAttribute('onclick') || '').match(/\d+/);
      send({ type: 'product', pid: m ? m[0] : '', title: title });
    } else {
      var h = t.getAttribute('href') || '';
      send({ type: 'click', what: h.indexOf('tel:') === 0 ? 'Call' : h.indexOf('mailto:') === 0 ? 'Email' : 'WhatsApp', title: title });
    }
  }, true);
})();
