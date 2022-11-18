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
})