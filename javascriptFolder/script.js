$(document).ready(function () {

    var todaysDate = moment().format('MMMM Do YYYY, h:m a');
    $(".todaysDate").text(todaysDate);


    for (var i = 0; i < dailyObject.Hours.length; i++) {

        var fullButtonDiv = $("<div>");
        //creates the hour number
        var hourToDisplay = dailyObject.Hours[i].hourName;
        var meridiumToDisplay = dailyObject.Hours[i].Meridium;
        var hourListDisplay = $(fullButtonDiv).text(hourToDisplay + meridiumToDisplay);
        $(".calendarBodyDaily").append(hourListDisplay);
        console.log(hourToDisplay + meridiumToDisplay);

        // creates the text box
        var eventToDisplay = dailyObject.Hours[i].Events;
        var eventBoxDisplay = $("<input>");
        eventBoxDisplay.addClass("event-textbox")
        var test = eventBoxDisplay.attr("id", "event-at-" + hourToDisplay);
        console.log(eventToDisplay);
        console.log(test);

        if (eventToDisplay === "") {
            $(fullButtonDiv).append(eventBoxDisplay);
            eventBoxDisplay.attr("value", "Click to add a task");
        } else {
            $(fullButtonDiv).append(eventBoxDisplay);
            eventBoxDisplay.attr("value", eventToDisplay);
        }

        //creates the button
        var lockInButton = $("<button>");
        lockInButton.addClass("lockedIn");
        lockInButton.text("Lock in the Work");
        $(fullButtonDiv).append(lockInButton);
        $(".calendarBodyDaily").append(fullButtonDiv);
        $(".calendarBodyDaily").append($("<br>"));


    }
});