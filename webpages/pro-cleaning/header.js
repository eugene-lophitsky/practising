const headerStroke = document.querySelector(".header");

function addHeaderStroke () {
    const verticalScroll = this.pageYOffset;
    verticalScroll > 180 ? headerStroke.style.borderBottom = "1px solid lightgrey" : headerStroke.style.borderBottom = "1px solid white";
}
window.addEventListener("scroll", addHeaderStroke);