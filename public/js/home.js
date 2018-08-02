$( document ).ready(function() {
    
    // cycle through background images

    // var images = ["../images/clouds.jpg", "../images/lightning.jpg", "../images/tornado.jpg", "../images/volcanoe.jpg"];
    // document.getElementsByClassName('mainview')[0].style.backgroundImage = 'url(' + images[Math.floor(Math.random() * images.length)] + ')';


    // register form event

    $("#submit").on("click", function (event) {
        event.preventDefault();
        let username = $("#username-register").val();
        let email = $("#email").val();
        let password = $("#password-register").val();
  
        let userInfo = {
          "username": username,
          "email": email,
          "password": password
        };
  
        $.ajax("/api/register", {
          type: "POST",
          data: userInfo
        }).then(function (response) {
            if (response.success === "true") {
              $(".modal-body").html("You have successfully created an account. Please log in.")
            }
            else {
              $(".modal-body").html("Please try again. " + response.error + ". " + response.username + " is already taken");
            }
            console.log(response)
          });
      })

    //   login form

    $("#loginButton").on("click", function(event) {
        event.preventDefault();
        let username = $("#username").val();
        let password = $("#password").val();
  
        let userLogin = {
          "username": username,
          "password": password       
        };
        console.log(userLogin);
        $.ajax("/api/login" , {
          type: "POST",
          data: userLogin
        }).then(function(response) {
          if (response.error === "") {
            window.location.replace('/search');
            console.log("yay");
            console.log(response);
          }
          else {
            alert("Your username and/or password is incorrect. Please try again.");
            console.log("sad");
          }
        })
      });

    //   confirm passwords match

    $(function () {
        $("#submit").click(function () {
            var password = $("#password-register").val();
            var confirmPassword = $("#password-confirm").val();
            if (password != confirmPassword) {
                alert("Passwords do not match.");
                return false;
            }
            return true;
        });
    });


});

