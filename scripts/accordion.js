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
    if(document.readyState != "loading"){
        handleAccordion('.accordion');
    }else{
        document.addEventListener("DOMContentLoaded", function(){
            handleAccordion('.accordion');
        })
    }
})();


function handleAccordion(selector){
    let accordions = document.querySelectorAll(selector);
    for(accordion of accordions){

        let navis = accordion.querySelectorAll('.acc-navi>.title');
        for(navi of navis){
            navi.addEventListener("click", function(e){
                if(!this.parentNode.classList.contains('active')){
                    closeAll('.accordion','.acc-navi','.title');
                }
                this.parentNode.classList.toggle('active');
                this.classList.toggle('active');
            });
        }

        let subnavis = accordion.querySelectorAll('.acc-sub-navi>.title');
        for(subnavi of subnavis){
            subnavi.addEventListener("click", function(e){
                if(!this.parentNode.classList.contains('active')){
                    closeAll('.accordion','.acc-sub-navi','.title');
                }
                this.parentNode.classList.toggle('active');
                this.classList.toggle('active');
            });
        }
    }
}


function closeAll(rootNodeSelector, childNodesSelector, titleSelector) {
    let accordion = document.querySelector(rootNodeSelector);
    let items = accordion.querySelectorAll(childNodesSelector);
    for (item of items) {
        item.classList.remove('active');
        item.querySelector(titleSelector).classList.remove('active');
    }
}
