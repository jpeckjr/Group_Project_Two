$(document).ready(function () {

    $("#search").on("click", function (event) {
        event.preventDefault();
        console.log("CLICKY")
        var searchedLocation = $("#searchField")
            .val()
            .trim();
        // Remove spaces 
        searchedLocation = searchedLocation.replace(/\s+/g, "").toLowerCase();
        // Save location searched into the table data

        console.log("You searched for:", searchedLocation)

        let data = {
            "text": searchedLocation
        };

        $.ajax("/api/disasters", {
            type: "get",
            data: data
        }).then(function (response) {
            // $("#location").html(response);
            // console.log("struggle is real " + response.data[i].EVENT_TYPE)
            console.log(response)
            // for (i = 0; i < 20; i++) {
                $(".location").append(response.data[9].EPISODE_NARRATIVE)

            // }



        });

        $.ajax("/api/disasters", {
            type: "get",
            data: data
        }).then(function (response) {
            // $("#location").html(response);
            // console.log("struggle is real " + response.data[i].EVENT_TYPE)
            console.log(response)
            $("#stormThings1").append(response.data[0].EVENT_TYPE);
            $("#stormThings2").append(response.data[1].EVENT_TYPE);
            $("#stormThings3").append(response.data[2].EVENT_TYPE);
            $("#stormThings4").append(response.data[3].EVENT_TYPE)

        });

        $.ajax("/api/disasters", {
            type: "get",
            data: data
        }).then(function (response) {
            // $("#location").html(response);
            // console.log("struggle is real " + response.data[i].EVENT_TYPE)
            console.log(response)
            $("#stormNumber1").append(response.data[0].DEATHS_DIRECT);
            $("#stormNumber2").append(response.data[1].DEATHS_DIRECT);
            $("#stormNumber3").append(response.data[2].DEATHS_DIRECT);
            $("#stormNumber4").append(response.data[3].DEATHS_DIRECT)

        });

       

    })

})

// Search button pulls info from data table
// $("#search").on("click", function (event) {
//     event.preventDefault();

//     console.log("CLICKY")
//     // Save location searched into the table data
//     var searchedLocation = $("#location")
//         .val()
//         .trim();
//     // Remove spaces 
//     searchedLocation = searchedLocation.replace(/\s+/g, "").toLowerCase();
//     console.log("You searched for:", searchedLocation)
//     // AJAX GET_request
//     $.get("/api/search/" + searchedLocation, function (data) {
//         console.log("DATA HERE")
//         console.log(data);
//         //Empty section
//         $("#location").empty();
//         //Return error if no data
//         if (!data) {
//             $("#location").append("<h2> No location found. Please try again. </h2>");
//         }
//         else {
//             //Append location
//             $("#well-section").append("<h2>" + data.something + "</h2>");
//             // Need table data
//             $("#well-section").append("<h3>Role: " + data.something + "</h3>");
//             // Need table data
//             $("#well-section").append("<h3>Age: " + data.something + "</h3>");
//             // Need table data
//             $("#well-section").append("<h3>Force Points: " + data.something + "</h3>");
//         }
//     });

// });