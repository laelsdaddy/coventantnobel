$(document).ready(function(){
//     $('.feedback__slider').slick({
//         //slidesToShow: 1,
//         // slidesToScroll: 1,
//         // autoplay: true,
//         // autoplaySpeed: 3000,
//         // arrows: false,
//         // dots: false,
//         // focusOnSelect: true,
//         // infinite: false,
//         // mobileFirst: false,
//         // pauseOnHover: true,
//         // speed: 200
//   });


    $('.wp-1-js').waypoint(function(direction) {
        $('.wp-1-js').addClass('animated slideInUp');
    }, {
        offset: '90%'
    });


    $('.wp-2-js').waypoint(function(direction) {
        $('.wp-2-js').addClass('animated slideInUp');
    }, {
        offset: '90%'
    });


    $('.wp-3-js').waypoint(function(direction) {
        $('.wp-3-js').addClass('animated fadeInLeft');
    }, {
        offset: '90%'
    });


    $('.wp-4-js').waypoint(function(direction) {
        $('.wp-4-js').addClass('animated fadeInRight');
    }, {
        offset: '90%'
    });


    $('.wp-5-js').waypoint(function(direction) {
        $('.wp-5-js').addClass('animated zoomIn');
    }, {
        offset: '90%'
    });


    $('.wp-6-js').waypoint(function(direction) {
        $('.wp-6-js').addClass('animated bounceInUp');
    }, {
        offset: '90%'
    });


    $('.wp-7-js').waypoint(function(direction) {
        $('.wp-7-js').addClass('animated bounceInUp');
    }, {
        offset: '70%'
    });


    $('.wp-8-js').waypoint(function(direction) {
        $('.wp-8-js').addClass('animated fadeInLeft');
    }, {
        offset: '70%'
    });


    $('.wp-9-js').waypoint(function(direction) {
        $('.wp-9-js').addClass('animated fadeInLeft');
    }, {
        offset: '70%'
    });


    $('.wp-a-js').waypoint(function(direction) {
        $('.wp-a-js').addClass('animated fadeInLeft');
    }, {
        offset: '70%'
    });




    //modal
    $('.plan__group-form').hide();
    $('.plan__single').css('background', '#ffffff');

    $('.plan__single').click(function(){
        $('.plan__group-form').hide();
        $('.plan__single-form').show();
        $('.plan__group').css('background', '#5ab9ea');
        $('.plan__group').css('color', '#ffffff');
        $('.plan__single').css('background', '#fff');
        $('.plan__single').css('color', '#5ab9ea');
        
    })

    $('.plan__group').click(function(){
        $('.plan__single-form').hide();
        $('.plan__group-form').show();
        $('.plan__group').css('background', '#ffffff');
        $('.plan__group').css('color', '#5ab9ea');
        $('.plan__single').css('background', '#5ab9ea');
        $('.plan__single').css('color', '#ffffff');
    })

});