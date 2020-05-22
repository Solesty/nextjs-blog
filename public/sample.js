
// Loads all the time, but might not load at first loading
// because react is not yet done loading page element
console.log("Running sample.js, I can be a third-party library")
this.console.log("Loaded");
var element = window.document.querySelector('.control-by-library')
if (element != null) {
    element.innerText = "View"
}
// end

window.onload = function () {
    // Load once, only when the browser is refreshed
    // window.document.querySelector('.control-by-library').innerText = "Just Read"
}