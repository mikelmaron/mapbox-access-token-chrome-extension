chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    var url = new URL(details.url);
    console.log(details.url);
    var access_token = url.searchParams.get("access_token");
    if (url.hostname.endsWith("mapbox.com") && access_token !== null) {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {type: "show_popup", token: access_token});
      });
    }
  },
  {urls: ["<all_urls>"]},
  ["blocking"]
);
