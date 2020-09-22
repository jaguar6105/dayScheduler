
var times = [9, 10, 11, 12, 1, 2, 3, 4, 5];


// initialize the dates
function initialize() {

    var d = new Date();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    $("#currentDay").text(months[d.getMonth()] + " " + d.getDate());
    createTimes();
}

//create timeblocks
function createTimes() {
    $.each( times, function(i, val) {

        var timeblock = $("<div>");
        timeblock.addClass("jumbotron jumbotron-fluid");

        var time;
        if(i < 3) {
            time = val + "AM";
        }
        else {
            time = val + "PM";
        }

        $(".container").append(timeblock);
        timeblock.append("<p>" + time + "</p>");
      });

}


initialize();