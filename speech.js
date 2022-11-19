$(document).ready(function() {
    $(".seat_heat").on('click', function () {
        let utter = new SpeechSynthesisUtterance("Seat Heat");
        window.speechSynthesis.speak(utter);  
    });
    $(".heat").on('click', function () {
        let utter = new SpeechSynthesisUtterance("Heat");
        window.speechSynthesis.speak(utter);  
    });
    $(".cool").on('click', function () {
        let utter = new SpeechSynthesisUtterance("Cool");
        window.speechSynthesis.speak(utter);  
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
        let utter = new SpeechSynthesisUtterance("Fan Settings");
        window.speechSynthesis.speak(utter);  
    });
    $(".slider_text").on('click', function () {
        let utter = new SpeechSynthesisUtterance("Fan Settings");
        window.speechSynthesis.speak(utter);  
    });
    $(".glovebox").on('click', function () {
        let utter;
        if (document.getElementsByClassName('glovebox')[0].classList.contains('selected')) {
            utter = new SpeechSynthesisUtterance("Glove box closed");
        } else {
            utter = new SpeechSynthesisUtterance("Glove box opened");
        }
        window.speechSynthesis.speak(utter);  
    });
    $(".side_mirr").on('click', function () {
        let utter = new SpeechSynthesisUtterance("Side Mirror adjustment");
        window.speechSynthesis.speak(utter);  
    });
    $(".left_mirror_sel").on('click', function () {
        let utter = new SpeechSynthesisUtterance("Left mirror selected");
        window.speechSynthesis.speak(utter);  
    });
    $(".right_mirror_sel").on('click', function () {
        let utter = new SpeechSynthesisUtterance("Right mirror selected");
        window.speechSynthesis.speak(utter);  
    });

})