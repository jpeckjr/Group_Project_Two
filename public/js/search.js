$( document ).ready(function() {

    $("#search").on("click", function (event){
        event.preventDefault();
        let searchField = $("#searchField").val();
        let search = {
            "searchField" : searchField
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