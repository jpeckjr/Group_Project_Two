$(document).ready(function () {

    $("#search").on("click", function (event) {
        event.preventDefault();
        let searchField = $("#searchField").val();
        let search = {
            "searchField": searchField
        };
        console.log(search);

        $.ajax("/api/search", {
            type: "POST",
            data: search,
        }).then(function (response) {
            $("#location").html(response);
            console.log(response)

        });

    })

})

// Search button pulls info from data table
$("#search").on("click", function () {
    // Save location searched into the table data
    var searchedLocation = $("#location")
        .val()
        .trim();
    // Remove spaces 
    searchedLocation = searchedLocation.replace(/\s+/g, "").toLowerCase();

    // AJAX GET_request
    $.get("/api/search/" + searchedLocation, function (data) {
        console.log(data);
        //Empty section
        $("#location").empty();
        //Return error if no data
        if (!data) {
            $("#location").append("<h2> No location found. Please try again. </h2>");
        }
        else {
            //Append location
            $("#well-section").append("<h2>" + data.something + "</h2>");
            // Need table data
            $("#well-section").append("<h3>Role: " + data.something + "</h3>");
            // Need table data
            $("#well-section").append("<h3>Age: " + data.something + "</h3>");
            // Need table data
            $("#well-section").append("<h3>Force Points: " + data.something + "</h3>");
        }
    });

});