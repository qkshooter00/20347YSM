$(document).ready(function () {
    // 메뉴 자바스크립트
    $('.intro-myself').click(function() {
        $('.section2').css('display', 'block');
        $('.section3').css('display', 'none');
        $('.section4').css('display', 'none');
        $('.button-style').css('display', 'none');
    });

    $('.hobby').click(function() {
        $('.section2').css('display', 'none');
        $('.section3').css('display', 'block');
        $('.section4').css('display', 'none');
        $('.button-style').css('display', 'none');
    });

    $('.my-photos').click(function() {
        $('.section2').css('display', 'none');
        $('.section3').css('display', 'none');
        $('.section4').css('display', 'block');
        $('.button-style').css('display', 'none');
    });
    // section4 자바스크립트
    $('.photo-1').hover(
        function() {$('.photo-1 > div').css('display', 'block');},
        function() {$('.photo-1 > div').css('display', 'none');},
    );
    $('.photo-2').hover(
        function() {$('.photo-2 > div').css('display', 'block');},
        function() {$('.photo-2 > div').css('display', 'none');},
    );
    $('.photo-3').hover(
        function() {$('.photo-3 > div').css('display', 'block');},
        function() {$('.photo-3 > div').css('display', 'none');},
    );
    $('.photo-4').hover(
        function() {$('.photo-4 > div').css('display', 'block');},
        function() {$('.photo-4 > div').css('display', 'none');},
    );
    
    // 메뉴바 자바스크립트
    $('.menuBar').click(
        function() {$('.button-style').slideToggle();}
    );
})