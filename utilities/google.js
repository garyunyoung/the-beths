const google = () => (
  <>
    <script
      dangerouslySetInnerHTML={{
        __html: `function (w, d, s, l, i) {
          console.log('one')
          w[l] = w[l] || [];
          w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
          var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != "dataLayer" ? "&l=" + l : "";
          j.async = true;
          j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
          f.parentNode.insertBefore(j, f);
        })(window, document, "script", "dataLayer", "GTM-M845XR9");`,
      }}
    />

    <script
      dangerouslySetInnerHTML={{
        __html: `function (w, d, s, l, i) {
          console.log('two')
          w[l] = w[l] || [];
          w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
          var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != 'dataLayer' ? '&l=' + l : '';
          j.async = true;
          j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
          f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-MM2W9SX');`,
      }}
    />

    <noscript>
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MM2W9SX"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>
    </noscript>
  </>
)

export default google