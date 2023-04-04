chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.type === "show_popup") {
      var popover = document.createElement("div");
      popover.style.position = "fixed";
      popover.style.top = "20px";
      popover.style.right = "20px";
      popover.style.width = "200px";
      popover.style.padding = "10px";
      popover.style.backgroundColor = "#fff";
      popover.style.border = "1px solid #ccc";
      popover.style.boxShadow = "0 1px 3px rgba(0,0,0,0.3)";
      popover.innerHTML = "<p><strong>Mapbox Access Token:</strong></p><p id='token'>" + request.token + "</p>";
      document.body.appendChild(popover);

      console.log(request.token);
      setTimeout(function() {
        popover.remove();
      }, 5000)
    }
  }
);
