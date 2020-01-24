$(document).ready(function () {

    var todaysDate = moment().format('MMMM Do YYYY, h:m a');
    var rightNow = moment().format("HH");
    $(".todaysDate").text(todaysDate);

    console.log(rightNow);

    var localDailyObject = JSON.parse(localStorage.getItem("localDailyObject"));
    if (localDailyObject === null) {
        localDailyObject = dailyObject;
        localStorage.setItem("localDailyObject", JSON.stringify(dailyObject));
    }
    //console.log(localDailyObject);


    for (var i = 0; i < localDailyObject.Hours.length; i++) {



        //creates the hour number
        var hourToDisplay = localDailyObject.Hours[i].hourName;
        var meridiumToDisplay = localDailyObject.Hours[i].Meridium;
        var titleBoxDisplay = $("<h4>");
        titleBoxDisplay.addClass("row-title");
        var hoursTime = hourToDisplay + meridiumToDisplay;
        $(titleBoxDisplay).text(hoursTime);
        var fullButtonDiv = $("<form>");
        $(fullButtonDiv).append(titleBoxDisplay);

        //var hourListDisplay = $(fullButtonDiv);
        $(".calendarBodyDaily").append(fullButtonDiv);
        // console.log(hourToDisplay + meridiumToDisplay);

        // creates the text box
        var localEventToDisplay = localDailyObject.Hours[i].Events;
        var eventBoxDisplay = $("<input>");
        eventBoxDisplay.addClass("event-textbox");
        eventBoxDisplay.attr("type", "text");


        eventBoxDisplay.attr("id", "event-at-" + hourToDisplay);

        if (localEventToDisplay !== "") {
            $(fullButtonDiv).append(eventBoxDisplay);
            eventBoxDisplay.attr("value", localEventToDisplay);
        } else {
            $(fullButtonDiv).append(eventBoxDisplay);
            eventBoxDisplay.attr("placeholder", "Click to add a task");
        }

        //creates the button
        var lockInButton = $("<button>");
        fullButtonDiv.addClass("lockedIn");
        lockInButton.text("Lock in the Work");
        lockInButton.attr("type", "submit");
        lockInButton.attr("id", "form-at-" + hourToDisplay);
        $(fullButtonDiv).append(lockInButton);
        $(".calendarBodyDaily").append(fullButtonDiv);
        $(".calendarBodyDaily").append($("<br>"));

    }
    //when the button is clicked it finds the value  


    $("#form-at-9").click(function (event) {
        event.preventDefault();
        localDailyObject.Hours[0].Events = $("#event-at-9").val();
        saveToLocal();

    });
    $("#form-at-10").click(function (event) {
        event.preventDefault();
        localDailyObject.Hours[1].Events = $("#event-at-10").val();
        saveToLocal();

    });
    $("#form-at-11").click(function (event) {
        event.preventDefault();
        localDailyObject.Hours[2].Events = $("#event-at-11").val();
        saveToLocal();

    });
    $("#form-at-12").click(function (event) {
        event.preventDefault();
        localDailyObject.Hours[3].Events = $("#event-at-12").val();
        saveToLocal();

    });
    $("#form-at-1").click(function (event) {
        event.preventDefault();
        localDailyObject.Hours[4].Events = $("#event-at-1").val();
        saveToLocal();

    });
    $("#form-at-2").click(function (event) {
        event.preventDefault();
        localDailyObject.Hours[5].Events = $("#event-at-2").val();
        saveToLocal();
    });
    $("#form-at-3").click(function (event) {
        event.preventDefault();
        localDailyObject.Hours[6].Events = $("#event-at-3").val();
        saveToLocal();
    });
    $("#form-at-4").click(function (event) {
        event.preventDefault();
        localDailyObject.Hours[7].Events = $("#event-at-4").val();
        saveToLocal();
    });
    $("#form-at-5").click(function (event) {
        event.preventDefault();
        localDailyObject.Hours[8].Events = $("#event-at-5").val();
        saveToLocal();
    });
    function saveToLocal() {
        localStorage.setItem("localDailyObject", JSON.stringify(localDailyObject));
        console.log(event);
    }
    makeColors();

    function makeColors() {
        for (var iHour = 0; iHour > localDailyObject.Hours.length; i++) {
            if (rightNow === localDailyObject.Hours[iHour].Military) {
                $(".lockedIn").css("background-color", "#0000FF");
            } else if (rightNow > localDailyObject.Hours[iHour].Military) {
                $(".lockedIn").css("background-color", "#B22222");
            } else {
                $(".lockedIn").css("background-color", "#006400");
            }
        }
    }

});