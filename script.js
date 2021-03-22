function vegan() {
    var box;
    box=document.getElementById('checkbox');/* 
    var select;
    select = document.getElementsByClassName('meat');
    console.log(select);
    select.classList.toggle("invisible"); */
    Array.from(document.getElementsByClassName("meat")).forEach(function(element) {
        element.classList.toggle('invisible');
     });
    }