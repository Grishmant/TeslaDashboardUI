$(document).ready(function() {
    $(".seat_heat").on('click', function () {
        if($(".seat_heat_ctrls").hasClass('show')) {
            let utter = new SpeechSynthesisUtterance("Seat Heating options open");
            window.speechSynthesis.speak(utter);  
        } else {
            let utter = new SpeechSynthesisUtterance("Seat Heating options closed");
            window.speechSynthesis.speak(utter);
        }
    });
    $(".heat").on('click', function () {
        if($(".heat").hasClass("selected")) {
            let utter = new SpeechSynthesisUtterance("car heating turned on");
            window.speechSynthesis.speak(utter);
        } else {
            let utter = new SpeechSynthesisUtterance("car heating turned off");
            window.speechSynthesis.speak(utter);
        }
    });
    $(".cool").on('click', function () {
        if($(".cool").hasClass("selected")) {
            let utter = new SpeechSynthesisUtterance("air conditioning turned on");
            window.speechSynthesis.speak(utter);
        } else {
            let utter = new SpeechSynthesisUtterance("air conditioning turned off");
            window.speechSynthesis.speak(utter);
        }
    });
    $(".left_arr").on('click', function () {
        let utter = new SpeechSynthesisUtterance("Temperature decreased");
        window.speechSynthesis.speak(utter);  
    });
    $(".right_arr").on('click', function () {
        let utter = new SpeechSynthesisUtterance("Temperature increased");
        window.speechSynthesis.speak(utter);  
    });
    $(".fan").on('click', function () {
        if($(".fan").hasClass("selected")) {
            let utter = new SpeechSynthesisUtterance("Fan settings open");
            window.speechSynthesis.speak(utter);
        } else {
            let utter = new SpeechSynthesisUtterance("fan settings closed");
            window.speechSynthesis.speak(utter);
        }
    });
    $(".slider_text").on('click', function () {
        let utter = new SpeechSynthesisUtterance("Fan Settings");
        window.speechSynthesis.speak(utter);  
    });
    $(".glovebox").on('click', function () {
        let utter;
        if (document.getElementsByClassName('glovebox')[0].classList.contains('selected')) {
            utter = new SpeechSynthesisUtterance("Glove box opened");
        } else {
            utter = new SpeechSynthesisUtterance("Glove box closed");
        }
        window.speechSynthesis.speak(utter);  
    });
    $(".side_mirr").on('click', function () {
        if($(".side_mirr").hasClass("selected")) {
            let utter = new SpeechSynthesisUtterance("side mirror adjustment open");
            window.speechSynthesis.speak(utter);
        } else {
            let utter = new SpeechSynthesisUtterance("side mirror adjustment closed");
            window.speechSynthesis.speak(utter);
        }  
    });
    $(".left_mirror_sel").on('click', function () {
        if(($('.left_mirror_sel img').width() == 200)) {
            let utter = new SpeechSynthesisUtterance("left mirror selected, start adjusting");
            window.speechSynthesis.speak(utter);
        }
    });
    $(".right_mirror_sel").on('click', function () {
        if(($('.right_mirror_sel img').width() == 200)) {
            let utter = new SpeechSynthesisUtterance("right mirror selected, start adjusting");
            window.speechSynthesis.speak(utter);
        } 
    });

})