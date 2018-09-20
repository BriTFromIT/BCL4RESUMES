// **********Jquery function featurng the &times; in html*******

// --------------------------- TIME CONSTRAINT ---------------------------------
// I aas trying to make an on hover event that showed the prices of each item - the price tag is on the page but isn't working for onhover
// $(function() {
//     var hov = $('.popcorn');
// hov.mouseover(function () {
//       hov.next().children('.popbox').fadeIn(350);
// });
// hov.mouseout(function () {
//       hov.next().children('.popbox').fadeOut(350);
// });  
// });

// MODAL JAVASCRIPT FOR PAGE 7 FORM 


document.getElementById('button').addEventListener('click',
// ****** Event Listener - this is used so that it wont overwrite the event handlers (onclick, onload and all of them)
// the function part is calling on the class and selecting it to change to flex
function() {
    // Query Selector - basically saying "to find the tag" user the "." to identify class or ID
    document.querySelector('.modalback').style.display = 'flex';
});
// the query selector is gragging the selected class and using eventListener to push it through
document.querySelector('.close').addEventListener('click',
function() {
    document.querySelector('.modalback').style.display = 'none';
});
