// class Accordion{
//     constructor({
//         scope: s = window.document,
//         accSelector: a,
//         naviSelector: n,
//         titleSelector: t,
//         contentSelector: c
//     })
// }
(function() {
    //loading all the contents and let you ready to use them
    if (document.readyState != "loading") {
        handleAccordion('.accordion');
    } else {
        document.addEventListener("DOMContentLoaded", function() {
            handleAccordion('.accordion');
        })
    }
})();


function handleAccordion(selector) {
    let accordions = document.querySelectorAll(selector);
    for (accordion of accordions) {

        let navis = accordion.querySelectorAll(".acc-navi > .title");
        for (navi of navis) {
            navi.addEventListener("click", function(evt) {
                if (!this.parentNode.classList.contains('active')) {
                    closeAllItems('.accordion', '.acc-navi', '.title');
                }
                this.parentNode.classList.toggle('active');
                this.classList.toggle('active');
            });
        }
    }
}

function closeAllItems(rootNodeSelector, childNodesSelector, titleSelector) {
    let accordion = document.querySelector(rootNodeSelector);

    let items = accordion.querySelectorAll(childNodesSelector);

    for (item of items) {
        item.classList.remove('active');
        item.querySelector(titleSelector).classList.remove('active');
    }
}