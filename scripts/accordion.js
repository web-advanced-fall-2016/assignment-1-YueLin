// class Accordion{
//     constructor({
//         scope: s = window.document,
//         accSelector: a,
//         naviSelector: n,
//         titleSelector: t,
//         contentSelector: c
//     })
// }
(function(){
    //loading all the contents and let you ready to use them
    if(document.readyState != "loading"){
        handleAccordion();
    }else{
        document.addEventListener("DOMContentLoaded", function(){
            handleAccordion();
        })
    }
})();


function handleAccordion(){
    let accordions = document.getElementsByClassName("accordion");
    for(accordion of accordions){
        let navis = accordion.getElementsByClassName("acc-navi");
        for(navi of navis){

            navi.addEventListener("click", function(e){
                this.classList.toggle('active');
                // this.nextElementChild.classList('active');
                let titles = accordion.getElementsByClassName("title");
                for(title of titles){
                    title.classList.toggle('active');
                    //what's the difference between toggle vs toggleclass
                    //when to use this.classList, when to use element.classList
                    //how to deal with the side scroll bar?
                }
            });
        }
    }
}
