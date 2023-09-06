const buttons = document.querySelector("#button")

buttons.addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById("pic").style.visibility = "hidden";
});