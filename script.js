
var times = [12, 1, 2, 3, 4,5,6,7,8, 9, 10, 11, 12, 1, 2, 3, 4, 5,6,7,8,9,10,11];
var d = new Date();
var actualTime = d.getHours();

// initialize the dates
function initialize() {

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    $("#currentDay").text(months[d.getMonth()] + " " + d.getDate());
    createTimes();
}

//create timeblocks
function createTimes() {
    for(var i = 9; i < 18; i++) {

        var val = times[i];

        var timeblock = $("<div>");
        var time;
        if(i < 12) {
            time = val + "AM";
        }
        else {
            time = val + "PM";
        }

        timeblock.addClass("jumbotron jumbotron-fluid " + val);

        if(i > actualTime) {
            timeblock.css("background-color", "lightgreen");
        }
        else if (i < actualTime) {
            timeblock.css("background-color", "gray");
        }
        else {
            timeblock.css("background-color", "red");
        }

        
        $(".container").append(timeblock);
        timeblock.append("<p>" + time + "</p>");
      }

}


initialize();