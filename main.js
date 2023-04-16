let section = document.querySelector(".our-skills");
const spans = document.querySelectorAll(".our-skills .progressbar .content span");
// console.log(spans)

window.onscroll = function(){
    if (window.scrollY >= section.offsetTop - 100){
        spans.forEach(function(span){
            span.style.width = span.getAttribute("data-progress");
        })
    }
}
let 
const spansBefore = document.querySelectorAll(".our-skills .progressbar .content span::before");
console.log(spansBefore)

