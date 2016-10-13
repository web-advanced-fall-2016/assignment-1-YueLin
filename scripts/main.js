// (function() {
//     let selectors = {
//         naviSelector: '.acc-navi',
//         rootSelector: '.accordion',
//         contentSelector: '.content',
//         titleSelector: '.title',
//         titleIconSelector:'.title-expand'

//     };
//     let selectors2 = {
//         naviSelector: '.acc-sub-navi',
//         rootSelector: '.accordion-2',
//         contentSelector: '.content',
//         titleSelector: '.title',
//         titleIconSelector:'.title-expand'
//     };
//     if (document.readyState != 'loading') {
//         let accordions = new SimpleAccordion(selectors, { enabled: true, openingDuration: 200, closingDuration: 200, resolution: 5, mutualExclusive: false });
//         let accordions2 = new SimpleAccordion(selectors2, { enabled: true, openingDuration: 200, closingDuration: 200, resolution: 5 });
//     } else {
//         document.addEventListener('DOMContentLoaded', () => {
//             let accordions = new SimpleAccordion(selectors, { enabled: true, openingDuration: 200, closingDuration: 200, resolution: 5 });
//             let accordions2 = new SimpleAccordion(selectors2, { enabled: true, openingDuration: 200, closingDuration: 200, resolution: 5 });
//         });
//     }
// })();
