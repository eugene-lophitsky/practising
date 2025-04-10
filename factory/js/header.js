const headerStroke = document.querySelector(".header");



function addHeaderStroke () {
    const verticalScroll = this.pageYOffset;
    if(verticalScroll > 70) {
        headerStroke.style.background = "#55565a";
        headerStroke.style.transition = "0.3s";
    } 
    else {
        headerStroke.style.background = "transparent";
    }
}
window.addEventListener("scroll", addHeaderStroke);