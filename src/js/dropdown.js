// document.addEventListener('DOMContentLoaded', function() {
//     var trigger = document.getElementsByClassName('dropdownMenu__icon');
//     var dropdown = document.getElementsByClassName('dropdownMenu__list');
    
//     trigger.onclick = function() {
//         // console.log(triger.click);
//         alert('All is good!');
//         trigger.onclick();
//     };
    
// });

$(function() {
    var trigger = $('.dropdownMenu__icon');
    var dropdown = $('.dropdownMenu__list');

    $('.dropdownMenu__icon').on('click', function() {
        if (dropdown.hasClass('dropdownMenu__list_active')) {
            dropdown.removeClass('dropdownMenu__list_active');
        } else {
            dropdown.addClass('dropdownMenu__list_active');
            
            // dropdown.css('opacity', 1);
            // dropdown.css({
            //     transition: 'opacity .5s',
            //     opacity: 1
            // });
        }
        
    });
});