console.log('%cCorrupted', 'background-color: black; color: white; padding: 5px; border-radius: 25px; font-size: 30px; font-family: monospace; margin: 10px;');

document.addEventListener('DOMContentLoaded', function() {
  var gaAds = document.createElement('script');
  gaAds.async = true;
  gaAds.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7001820938357122';
  gaAds.crossOrigin = 'anonymous';
  document.body.appendChild(gaAds);

  var gatag = document.createElement('script');
  gatag.async = true;
  gatag.src = 'https://www.googletagmanager.com/gtag/js?id=G-9VYHCJ4PES';
  document.body.appendChild(gatag);

  var gatag2 = document.createElement('script');
  gatag2.textContent = `
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-9VYHCJ4PES");
  `;
  document.body.appendChild(gatag2);

  var urlParams = new URLSearchParams(window.location.search);
  if (!urlParams.has('embed')) {
    var tawkAPI = document.createElement('script');
    tawkAPI.type = 'text/javascript';
    tawkAPI.textContent = `
      var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
      (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/65a941a28d261e1b5f54e580/1hkeigoco';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
      })();
    `;
    document.body.appendChild(tawkAPI);
  }
});