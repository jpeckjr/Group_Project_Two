$(document).ready(function () {
    // log in
    $.ajax("/api/username", {
        type: "get",
    }).then(function (res) {
        let userLogin = res.username;
        $("#userName").html(userLogin);
    })

    $.ajax("/api/searches", {
        type: "get",

    }).then(function (response) {
        let savedLocations = response.data;
        for (i = 0; i < savedLocations.length; i++) {

            if (savedLocations[i].avoid_destination === false) {
                $("#safeTravel").append("<br>" + savedLocations[i].search_text);
            }
            else {
                $("#dangerTravel").append("<br>" + savedLocations[i].search_text);
            }
        }
    });

    $("#search").on("click", function (event) {
        event.preventDefault();
        let searchedLocation = $("#searchField").val().trim();

        // Replace spaces with plus signs
        searchedLocation = searchedLocation.replace(/\s+/g, "+").toLowerCase();

        let data = {
            "text": searchedLocation
        };
        console.log("data", data);
        $.ajax("/api/disasters", {
            "type": "GET",
            "data": data
        }).then(function (response) {

            let random = response.data[Math.floor(Math.random() * response.data.length)];
            $(".location").html(random.EPISODE_NARRATIVE)

            // card event details
            $("#stormThings1").html(random.STATE);
            $("#stormThings2").html(random.EVENT_TYPE);
            $("#stormThings3").html(random.DEATHS_DIRECT);
            $("#stormThings4").html(random.DAMAGE_PROPERTY);

        });

    });

    $("#safe").on("click", function (event) {
        event.preventDefault();
        let state = $("#stormThings1").text();

        console.log(state)
        let safeSearch = {
            "search_text": state,
            "avoid_destination": false
        };

        $.ajax("/api/searches", {
            type: "post",
            data: safeSearch
        }).then(function (response) {
            $("#safeTravel").append("<br>" + state);
            console.log(response)

        });

    });

    $("#danger").on("click", function (event) {
        event.preventDefault();
        let state = $("#stormThings1").text();

        console.log(state)
        let safeSearch = {
            "search_text": state,
            "avoid_destination": true
        };

        $.ajax("/api/searches", {
            type: "post",
            data: safeSearch
        }).then(function (response) {
            $("#dangerTravel").append("<br>" + state);
        });

    });

});



