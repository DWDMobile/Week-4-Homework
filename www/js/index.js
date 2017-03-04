var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();

        // when debugging, make sure this prints to the console to ensure you don't have any js errors
        console.log("javascript works");
    },


    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },


    //put your old initialize code in here, will be executed when your app is ready
    //(kind of like document ready!)
    onDeviceReady: function() {
//new
          // config your skygear app
        skygear.config({
            'endPoint': 'https://sapport.skygeario.com/', // trailing slash is required
            'apiKey': 'c0ecade7127441c382b50fd349c025f3',
        }).then(function() {
            console.log('skygear container is now ready for making API calls.');
        }, function(error) {
            console.log(error);
        });


        // click listeners
        $('.sign-up-button').click(function(e) {
            e.preventDefault();
            app.signUpUser();

        });

        $('.sign-in-button').click(function(e) {
            debugger;
            e.preventDefault();
            app.signInUser();
        });




        //starts here old code

         document.querySelector("#firstname").addEventListener("keyup",function(e){

          document.querySelector("#getSupport1 p span").textContent = e.target.value;
          document.querySelector("#giveSupport1 p span").textContent = e.target.value;

        });

        //document.addEventListener("DOMContentLoaded", function(){
          window.location.hash="home";
        //});

        function updategetsuport(text){
          var support = text;
          if (!text || text.trim() === ""){
              support = document.querySelector("#getSupport1 select :checked").textContent;
          }
          document.querySelector("#getSupport2 li span").textContent=support;
        }

      function getsupportdropdown(){
          updategetsuport();
      }

        updategetsuport();
        document.querySelector("#getSupport1 select").addEventListener("change", getsupportdropdown);

        document.querySelector("#getSupport1 a[href='#getSupport2']").addEventListener("click", function(){
          var text = document.querySelector("#getSupport1 textarea").value;
          updategetsuport(text);
        });

      var giveSupportButtons = document.querySelectorAll("#giveSupport1 a[href='#giveSupport2']");
      for (var i=0; i<giveSupportButtons.length; i++){
          giveSupportButtons[i].addEventListener("click", updategivesupport);
      }

      function updategivesupport(e){
          var li = e.target.parentNode.parentNode,
              src = li.querySelector("img").src,
              style = li.querySelector("img").style,
              text = li.textContent;
          document.querySelector("#giveSupport2 ul").innerHTML = "<li><img src='" + src + "' /> " + text + "</li>";
      }

      document.querySelector("#giveSupport2 textarea").addEventListener("keyup", function(e){
        if (e.keyCode === 13) addSupport();
      });
       document.querySelector("#giveSupport2 textarea").addEventListener("blur", addSupport);

      function addSupport(){
          var textarea = document.querySelector("#giveSupport2 textarea"),
              text = textarea.value,
              ul = document.querySelector("#giveSupport2 ul");
          ul.innerHTML += "<li><img src='img/woman_icon.svg'> " + text + "</li>";
          textarea.value = "";
      }

    document.querySelector("#getSupport2 textarea").addEventListener("keyup", function(e){
      if (e.keyCode === 13) Comment();
    });
    document.querySelector("#getSupport2 textarea").addEventListener("blur", Comment);

      function Comment(){
          var textarea = document.querySelector("#getSupport2 textarea"),
              text = textarea.value,
              ul = document.querySelector("#getSupport2 ul");
          ul.innerHTML += "<li><img src='img/woman_icon.svg'> " + text + "</li>";
          textarea.value = "";
      }

      // $("body").on("swiperight", function(e){
      //   window.history.back();
      // });

    document.querySelector("a[href='#back']").addEventListener("click", function(e){
      e.preventDefault();
      // navigator.app.backHistory();
      window.history.back();
    });
  

  }, //end onDeviceReady


// //more new code
signUpUser: function() {
        var email = $('#signup #email').val();
        var password = $('#signup #password').val();

        skygear.signupWithEmail(email, password).then(function(user) {
          console.log(user); // user object
          //app.changePage('#page2');
        }, function (error) {
          console.log(error);
          //$('.errors').html(error.error.message);
        });
    },

    signInUser: function() {
        var email = $('#login #email').val();
        var password = $('#login #password').val();

        skygear.loginWithEmail(email, password).then(function (user) {
          //app.changePage('#page2');
          //$('.hello .email').html('Hi ' + user.email );
          console.log(user); // user object
        }, function (error) {
          console.log(error); 
          //$('.errors').html(error.error.message);   
        });
    },


 };
