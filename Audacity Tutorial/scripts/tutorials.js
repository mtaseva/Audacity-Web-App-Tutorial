// funkcija za navigacija vo zavisnost od izborot vo dropdown listata
function navigateToTutorial() {
    const tutorial = document.getElementById("tutorial-dropdown").value;
    if (tutorial) {
        window.location.href = tutorial;
    }
}