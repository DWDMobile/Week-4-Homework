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
        
$( document ).ready(function() {
    $('#calender').hide();
var toggle = false; //toggle false means calender is hidden
console.log("hidden");
//jquery, # for id, . for class

$( "#calButton" ).click(function() {
    if(toggle == false){
        $('#calender').show();
        toggle = true;
    }else{
        $( "#calender" ).hide( "slow" );
        toggle = false;
    }
  
});

});
    }
    
}