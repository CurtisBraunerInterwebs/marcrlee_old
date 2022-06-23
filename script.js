console.log('Hello!');
const aboutNav = document.getElementById("aboutNav");
const welcomeNav = document.getElementById("welcomeNav");
window.addEventListener("DOMContentLoaded", function () {init();})
function init () {
  //function closePage(page) {
    //console.log("close");
    //const toClose = document.getElementById(page);
    //console.log(toClose.innerHTML);
    //if (toClose != null) 
    //toClose.style = 'display:none';
  //}
  function openPage(page) {
    console.log("open");
    const toOpen = document.getElementById(page);
    console.log(toOpen);
    toOpen.style = 'display:block';
  }
  function openOnly(page) {
    console.log("only " + page);
    const pagesCol = document.getElementsByClassName('page');
    var pages = new Array();
    var pageIds = new Array();
    pages = Array.from(pagesCol);
    for(var i=0; i<pages.length ;i++) {
      pageIds.push(pages[i].getAttribute("id"));
    }
    //Array.from(pages).forEach(closePage);
    //Array.from(pages).forEach();
    openPage(page);
  }

  openOnly("welcome-section");

  aboutNav.addEventListener("click", function () {openOnly("about-section");});
  //welcomeNav.addEventListener("click", openOnly("welcome"));
}
