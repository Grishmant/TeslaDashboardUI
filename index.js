// @ts-nocheck

$(document).ready(function() {
    $(".close").on('click', function() { addAllElements() })
    
    calculateHeightOfListContainer();

    $(".fan, .seat_heat").on('click', function(e) {
        $(".car_ctrls").removeClass('show');
        $(".car_ctrls .container").removeClass('show');
        $(".conn_ctrls").removeClass('show');
        $(".conn_ctrls .container").removeClass('show');
        $(".temp_ctrls_opts").addClass('show');
        if(e.target.classList.contains("fan") || e.target.parentElement.classList.contains("fan")) {
            $(".fan_ctrls").addClass('show');
            $(".seat_heat_ctrls").removeClass('show');
        } else {
            $(".seat_heat_ctrls").addClass('show');
            $(".fan_ctrls").removeClass('show');
        }
    });

    $(".side_mirr").on('click', function(e) {
        $(".temp_ctrls").removeClass('show');
        $(".temp_ctrls .container").removeClass('show');
        $(".conn_ctrls").removeClass('show');
        $(".conn_ctrls .container").removeClass('show');
        $(".car_ctrls_opts").addClass('show');
        $(".side_mirror_ctrls").addClass('show');
    });

    $('.slider').on('input', function(ev) {
        let val = ev.target.value;
        if(val == 0) {
            let parent = ev.target.parentElement;
            $(parent).find(".seat").addClass('off');
            $(parent).find('.seat_text').text('OFF');
            $(parent).find('.slider').addClass('disabled');
        } else {
            let parent = ev.target.parentElement;
            $(parent).find(".seat").removeClass('off');
            $(parent).find('.seat_text').text('ON');
            $(parent).find('.slider').removeClass('disabled');
            ev.target.style.backgroundSize = (val - 0) * 100 / (3) + '% 100%'
        }
    });

    $('.seat').on('click', function(ev) {
        let parent = ev.target.parentElement;
        if($(parent).find('.seat_text').text() == 'OFF') {
            $(parent).find(".seat").removeClass('off');
            $(parent).find('.seat_text').text('ON');
            $(parent).find('.slider').removeClass('disabled');
        } else {
            $(parent).find(".seat").addClass('off');
            $(parent).find('.seat_text').text('OFF');
            $(parent).find('.slider').addClass('disabled');
        }
    });
});

function calculateHeightOfListContainer(){
    const heightOfListItem = 228;
    const styleTag = document.createElement('style');
    document.body.prepend(styleTag);
    styleTag.innerHTML = `.temp_ctrls.show, .car_ctrls.show, .conn_ctrls.show {
    height: ${heightOfListItem}px;
    }`;
    setTimeout(function() {
        styleTag.innerHTML += `.temp_ctrls, .car_ctrls, .conn_ctrls {
            transition: all 0.4s ease-out;
        }`;
    }, 10);
};

function addAllElements() {
    $(".temp_ctrls").addClass('show');
    $(".temp_ctrls .container").addClass('show');
    $(".car_ctrls").addClass('show');
    $(".car_ctrls .container").addClass('show');
    $(".conn_ctrls").addClass('show');
    $(".conn_ctrls .container").addClass('show');
    $(".temp_ctrls_opts").removeClass('show');
    $(".car_ctrls_opts").removeClass('show');
    $(".fan_ctrls").removeClass('show');
    $(".seat_heat_ctrls").removeClass('show');
    $(".side_mirror_ctrls").removeClass('show');
}