
var times = [12, 1, 2, 3, 4,5,6,7,8, 9, 10, 11, 12, 1, 2, 3, 4, 5,6,7,8,9,10,11];
var d = new Date();
var actualTime = d.getHours();
var text = [];

// initialize the dates
function initialize() {
    //load persistent data
    loadData();

    //month array
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    $("#currentDay").text(months[d.getMonth()] + " " + d.getDate());

    //create timeblocks
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

        //bootstrap rows
        var row = $(" <div class='row'>");
        var column1 = $(" <div class='col-2'>");
        var column2 = $(" <div class='col-8'>");
        var column3 = $(" <div class='col-2'>");
        
        $(".container").append(timeblock);
        timeblock.append(row);

        //appending bootstrap rows rows
        row.append(column1);
        row.append(column2);
        row.append(column3);

        //button characteristics
        button.text("Save");
        button.val(count);
        button.on("click", saveText);

        //input htl characteristics
        input.css("background-color", "white");
        input.text(text[count]);
        input.addClass("time" + count);

        //adding data to rows
        column1.append("<p>" + time + "</p>");
        column2.append(input);
        column3.append(button);
        count++;
      }

}

//load text array
function loadData() {
    var textJson = localStorage.getItem("todo");
    if(textJson) {
        text = JSON.parse(textJson);
    }
    else {
        text = ["", "", "", "", "", "", "", "", ""];
    }
}

function storeData() {
    // Add code here to stringify the todos array and save it to the "todos" key in localStorage
    var textString = JSON.stringify(text);
    localStorage.setItem("todo", textString);
  }

//save text in textbox
  function saveText() {
      var value = $(this).val();
      var textBox = $(".time"+value).val();

      text[value] = textBox;
      storeData();
  }

initialize();