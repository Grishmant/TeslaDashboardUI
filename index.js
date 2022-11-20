// @ts-nocheck

$(document).ready(function() {
    $(".close").on('click', function() { addAllElements(); })
    calculateHeightOfListContainer();

    $(".fan").on('click', function(ev) {
        if($(".fan_ctrls").hasClass('show')) {
            addAllElements();
        } else {
            $(".fan_ctrls").addClass('show');
            $(".temp_ctrls_opts").addClass('show');
            $(".fan").addClass('selected');
            $(".seat_heat").removeClass('selected');
            $(".seat_heat_ctrls").removeClass('show');

            $(".car_ctrls").removeClass('show');
            $(".car_ctrls .container").removeClass('show');
            $(".conn_ctrls").removeClass('show');
            $(".conn_ctrls .container").removeClass('show');
        }
    });

    $(".seat_heat").on('click', function(ev) {
        if($(".seat_heat_ctrls").hasClass('show')) {
            addAllElements();
        } else {
            $(".seat_heat_ctrls").addClass('show');
            $(".temp_ctrls_opts").addClass('show');
            $(".seat_heat").addClass('selected');
            $(".fan").removeClass('selected');
            $(".fan_ctrls").removeClass('show');

            $(".car_ctrls").removeClass('show');
            $(".car_ctrls .container").removeClass('show');
            $(".conn_ctrls").removeClass('show');
            $(".conn_ctrls .container").removeClass('show');
        }
    });

    // AC temperature
    $(".left_arr, .right_arr").on('click', function(ev) {
        let classList = ev.target.classList;
        let currentVal = $("#temperature").text();
        let change = classList.contains('left_arr') ? -1 : 1;
        if(parseInt(currentVal) + change >= 55 && parseInt(currentVal) + change <= 85) {
            $("#temperature").text(parseInt(currentVal) + change);
        }
    });

    // Glove Box
    $(".glovebox").on('click', function() {
        $('.glovebox').toggleClass('selected');
    });

    // Cool and Heat
    $(".heat").on('click', function() {
        $('.heat').toggleClass('selected');
        $(".cool").removeClass('selected');
    });
    $(".cool").on('click', function() {
        $('.cool').toggleClass('selected');
        $(".heat").removeClass('selected');
    });

    // side mirrors 
    $(".side_mirr").on('click', function(e) {
        if ($(".car_ctrls_opts").hasClass('show')) {
            $(".car_ctrls_opts").removeClass('show');
            $(".side_mirror_ctrls").removeClass('show');
            $(".side_mirr").removeClass('selected');
            $(".temp_ctrls").addClass('show');
            $(".temp_ctrls .container").addClass('show');
            $(".conn_ctrls").addClass('show');
            $(".conn_ctrls .container").addClass('show');
        } else {
            $(".temp_ctrls").removeClass('show');
            $(".temp_ctrls .container").removeClass('show');
            $(".conn_ctrls").removeClass('show');
            $(".conn_ctrls .container").removeClass('show');
            $(".car_ctrls_opts").addClass('show');
            $(".side_mirror_ctrls").addClass('show');
            $(this).addClass('selected');
        }
    });

    // side mirror controls
    $(".left_mirror_sel").on('click', function() {
        if($('.left_mirror_sel img').width() == 200) {
            $(".right_mirror_sel img").css({'filter': 'none'});
            $(".left_mirror_sel img").css({'filter': 'none'});
            $(".right_mirror_sel img").css({'width': '180px', 'height': '180px'});
            $(".left_mirror_sel img").css({'width': '180px', 'height': '180px'});
        } else {
            $(".left_mirror_sel img").css({'filter': 'invert(42%) sepia(41%) saturate(342%) hue-rotate(136deg) brightness(87%) contrast(84%)' });
            $(".left_mirror_sel img").css({'width': '200px', 'height': '200px'});
            $(".right_mirror_sel img").css({'width': '90px', 'height': '90px'});
            $(".right_mirror_sel img").css({'filter': 'none'});
        }
    });
    $(".right_mirror_sel").on('click', function() {
        if($(".right_mirror_sel img").width() == 200) {
            $(".right_mirror_sel img").css({'filter': 'none'});
            $(".left_mirror_sel img").css({'filter': 'none'});
            $(".right_mirror_sel img").css({'width': '180px', 'height': '180px'});
            $(".left_mirror_sel img").css({'width': '180px', 'height': '180px'});
        } else {
            $(".right_mirror_sel img").css({'filter': 'invert(42%) sepia(41%) saturate(342%) hue-rotate(136deg) brightness(87%) contrast(84%)' });
            $(".right_mirror_sel img").css({'width': '200px', 'height': '200px'});
            $(".left_mirror_sel img").css({'width': '90px', 'height': '90px'});
            $(".left_mirror_sel img").css({'filter': 'none'});
        }
    });

    // seat heat slider
    $('.seat_heat_slider').on('input', function(ev) {
        let val = ev.target.value;
        let classList = ev.target.classList;
        let sliderNo = classList.contains('seat1') ? 1 : classList.contains('seat2') ? 2 : classList.contains('seat3') ? 3 : classList.contains('seat4') ? 4 : 5;
        playAudio(val, sliderNo);
        if(val == 0) {
            let parent = ev.target.parentElement;
            $(parent).find(".seat").addClass('off');
            $(parent).find('.seat_text').text('OFF');
            $(parent).find('.seat_heat_slider').addClass('disabled');
        } else {
            let parent = ev.target.parentElement;
            $(parent).find(".seat").removeClass('off');
            $(parent).find('.seat_text').text('ON');
            $(parent).find('.seat_heat_slider').removeClass('disabled');
            ev.target.style.backgroundSize = (val - 0) * 100 / (3) + '% 100%'
        }
    });

    // fan speed slider
    $('.fan_speed_slider').on('input', function(ev) {
        let val = ev.target.value;
        var slider1 = ev.target.classList.contains('fan_speed_slider1') ? true : false;
        playAudio(val, slider1 ? 6 : 7);
        if(val == 0) {
            ev.target.classList.add('disabled');
            ev.target.style.backgroundSize = '0% 100%';
            if(slider1) {
                $('.fan_direction1 .fan_dir_icon').addClass('disable');
            } else {
                $('.fan_direction2 .fan_dir_icon').addClass('disable');
            }
        } else {
            ev.target.classList.remove('disabled');
            ev.target.style.backgroundSize = (val - 0) * 100 / (4) + '% 100%';
            if(slider1) {
                $('.fan_direction1 .fan_dir_icon').removeClass('disable');
            } else {
                $('.fan_direction2 .fan_dir_icon').removeClass('disable');
            }
        }
    });

    // fan direction
    $(".fan_dir_icon").on('click', function(ev) {
        if(ev.target.classList.contains('fan_dir_icon')) {
            $(ev.target.parentElement).find('.fan_dir_icon').removeClass('highlight');
            ev.target.classList.add('highlight');
        } else {
            $(ev.target.parentElement.parentElement).find('.fan_dir_icon').removeClass('highlight');
            ev.target.parentElement.classList.add('highlight');
        }
    });

    $('.seat').on('click', function(ev) {
        let parent = ev.target.parentElement;
        if($(parent).find('.seat_text').text() == 'OFF') {
            $(parent).find(".seat").removeClass('off');
            $(parent).find('.seat_text').text('ON');
            $(parent).find('.seat_heat_slider').removeClass('disabled');
        } else {
            $(parent).find(".seat").addClass('off');
            $(parent).find('.seat_text').text('OFF');
            $(parent).find('.seat_heat_slider').addClass('disabled');
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
    $(".temp_ctrls_opts").removeClass('show');
    $(".car_ctrls_opts").removeClass('show');
    $(".seat_heat").removeClass('selected');
    $(".fan").removeClass('selected');
    $(".side_mirr").removeClass('selected');
    $(".temp_ctrls").addClass('show');
    $(".temp_ctrls .container").addClass('show');
    $(".car_ctrls").addClass('show');
    $(".car_ctrls .container").addClass('show');
    $(".conn_ctrls").addClass('show');
    $(".conn_ctrls .container").addClass('show');
    $(".fan_ctrls").removeClass('show');
    $(".seat_heat_ctrls").removeClass('show');
    $(".side_mirror_ctrls").removeClass('show');
}

var previousValue1 = -1, previousValue2 = -1, previousValue3 = -1, previousValue4 = -1, previousValue5 = -1, previousValue6 = -1, previousValue7 = -1;
function playAudio(val, sliderNumber) {
    audio = new Audio();
    if (sliderNumber == 1) {
        if (val < previousValue1) {
            audio.src = "audio/button-decrease.mp3";
            console.log("decrease");
        } else {
            audio.src = "audio/button-increase.mp3";
            console.log("increase");
        }
        previousValue1 = val
    }
    
    if (sliderNumber == 2) {
        if (val < previousValue2) {
            audio.src = "audio/button-decrease.mp3";
            console.log("decrease");
        } else {
            audio.src = "audio/button-increase.mp3";
            console.log("increase");
        }
        previousValue2 = val
    }

    if (sliderNumber == 3) {
        if (val < previousValue3) {
            audio.src = "audio/button-decrease.mp3";
            console.log("decrease");
        } else {
            audio.src = "audio/button-increase.mp3";
            console.log("increase");
        }
        previousValue3 = val
    }

    if (sliderNumber == 4) {
        if (val < previousValue4) {
            audio.src = "audio/button-decrease.mp3";
            console.log("decrease");
        } else {
            audio.src = "audio/button-increase.mp3";
            console.log("increase");
        }
        previousValue4 = val
    }

    if (sliderNumber == 5) {
        if (val < previousValue5) {
            audio.src = "audio/button-decrease.mp3";
            console.log("decrease");
        } else {
            audio.src = "audio/button-increase.mp3";
            console.log("increase");
        }
        previousValue5 = val
    }

    if (sliderNumber == 6) {
        if (val < previousValue5) {
            audio.src = "audio/button-decrease.mp3";
            console.log("decrease");
        } else {
            audio.src = "audio/button-increase.mp3";
            console.log("increase");
        }
        previousValue5 = val
    }

    if (sliderNumber == 7) {
        if (val < previousValue5) {
            audio.src = "audio/button-decrease.mp3";
            console.log("decrease");
        } else {
            audio.src = "audio/button-increase.mp3";
            console.log("increase");
        }
        previousValue5 = val
    }
	audio.loop = false;
	audio.play();
    previousValue = val;
}