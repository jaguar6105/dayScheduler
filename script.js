
var times = [12, 1, 2, 3, 4,5,6,7,8, 9, 10, 11, 12, 1, 2, 3, 4, 5,6,7,8,9,10,11];
var d = new Date();
var actualTime = d.getHours();
var text = ["", "", "", "", "", "", "", "", ""];

// initialize the dates
function initialize() {

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    $("#currentDay").text(months[d.getMonth()] + " " + d.getDate());
    createTimes();
}

//create timeblocks
function createTimes() {
    var count = 0;

    for(var i = 9; i < 18; i++) {

        var val = times[i];

        var timeblock = $("<div>");
        var time;
        var button = $("<button>");
        var input = $("<textarea rows='4' cols='50'>");

        if(i < 12) {
            time = val + "AM";
        }
        else {
            time = val + "PM";
        }

        timeblock.addClass("jumbotron jumbotron-fluid " + val);

        //color based on time of day
        if(i > actualTime) {
            timeblock.css("background-color", "lightgreen");
        }
        else if (i < actualTime) {
            timeblock.css("background-color", "gray");
        }
        else {
            timeblock.css("background-color", "red");
        }

        var row = $(" <div class='row'>");
        var column1 = $(" <div class='col-2'>");
        var column2 = $(" <div class='col-8'>");
        var column3 = $(" <div class='col-2'>");
        
        $(".container").append(timeblock);
        timeblock.append(row);
        row.append(column1);
        row.append(column2);
        row.append(column3);

        button.text("Save");
        button.val(count);

        input.css("background-color", "white");
        input.text(text[count]);

        column1.append("<p>" + time + "</p>");
        column2.append(input);
        column3.append(button);
        count++;
      }

}


initialize();