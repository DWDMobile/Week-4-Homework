var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
        console.log("javascript works");
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {

      $("document").ready(function() {
        $("#newProj").on("tap", btnMouseClick);
        $(".projects").on("tap", "#newTask", btnNewTask);
        $(".projects").on("doubletap", ".projectName", editName);
        $(".projects").on("doubletap", ".task", editTask);
        $(".projects").prop("checked", "input[type='checkbox']", checkedTask); //not working
        $(".projects").on("drag", ".projectName", removeProj)

        function btnMouseClick(evt){
          if ($(".project").last().hasClass("col-xs-12")) {
            $(".project").last().replaceWith("<div class='col-xs-6 project'><div class='projectName'>Project Name 3A</div><button type='button' id='newTask' class='btn btn-primary btn-lg btn-block'><span class='glyphicon glyphicon glyphicon-plus' aria-hidden='true'></span></button></div><div class='col-xs-6 project'><div class='projectName'>Project Name 3A</div><button type='button' id='newTask' class='btn btn-primary btn-lg btn-block'><span class='glyphicon glyphicon glyphicon-plus' aria-hidden='true'></span></button></div>")
          } else {
            $(".projects").append("<div class='row'><div class='col-xs-12 project'><div class='projectName'>Project Name</div><button type='button' id='newTask' class='btn btn-primary btn-lg btn-block'><span class='glyphicon glyphicon glyphicon-plus' aria-hidden='true'></span></button></div></div>")
          }
        }
        function btnNewTask(evt){
          $(this).before("<div class='checkbox'><span style='padding-left:30px;'><input type='checkbox' value=''></span><span class='task' style='display:inline;'>Add task 2</span></div>")
        }
        function editName(evt){
          var $div = $(this), isEditable=$div.is('.editable');
          $div.prop('contenteditable',!isEditable).toggleClass('editable')
        }
        function editTask(evt){
          var $div = $(this), isEditable=$div.is('.editable');
          $div.prop('contenteditable',!isEditable).toggleClass('editable')
        }
        function checkedTask(evt){ //I can't know if it's working
          var current = $(this).text();
          console.log(current);
          $(this).text().replaceWith("<del>" + current + "</del>")
        }
        function removeProj(){
          if ($(this).parent().hasClass("col-xs-6")){
            $(this).siblings(".project").attr("class", "col-xs-12 project") //this line is not working
          }
          $(this).parent().remove();
        }
      });
    }
}
