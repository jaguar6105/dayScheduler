



// initialize the dates
function initialize() {

    var d = new Date();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    $("#currentDay").text(months[d.getMonth()] + " " + d.getDate());

}


function createTimes() {

}


initialize();