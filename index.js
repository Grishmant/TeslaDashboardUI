// @ts-nocheck

$(document).ready(function() {
    $(".close").on('click', function() { addAllElements() })
    
    calculateHeightOfListContainer();

    $(".fan").on('click', function(e) {
        $(".car_ctrls").removeClass('show');
        $(".car_ctrls .container").removeClass('show');
        $(".conn_ctrls").removeClass('show');
        $(".conn_ctrls .container").removeClass('show');
        $(".fan_ctrls").addClass('show');
    });

    $(".side_mirr").on('click', function(e) {
        $(".temp_ctrls").removeClass('show');
        $(".temp_ctrls .container").removeClass('show');
        $(".conn_ctrls").removeClass('show');
        $(".conn_ctrls .container").removeClass('show');
        $(".side_mirr_ctrls").addClass('show');
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
    $(".fan_ctrls").removeClass('show');
    $(".side_mirr_ctrls").removeClass('show');
}