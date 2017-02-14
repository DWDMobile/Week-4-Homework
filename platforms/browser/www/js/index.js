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
      showNewPage('landing_page');
      document.getElementsByClassName('card')[0].addEventListener('click',function(){
        console.log("card clicked")
        showNewPage("style_detail");
      });
      document.getElementById('fab').addEventListener('click',function(){
        console.log("fab button clicked");
        showNewPage("add_new_form");
      });
      document.getElementById('j_formback').addEventListener('click',function(){
        console.log("form back button clicked");
        showNewPage("landing_page");
      });
      document.getElementById('j_findStyle').addEventListener('click',function(){
        console.log("find style button clicked");
        showNewPage("new_style_detail");
      });
      document.getElementById('js_addStyle').addEventListener('click',function(){
        console.log("add style button clicked");
        showNewPage("landing_page");
      });
      document.getElementById('j_newStyleback').addEventListener('click',function(){
        console.log("new style page back button clicked");
        showNewPage("add_new_form");
      });
      document.getElementById('j_styleback').addEventListener('click',function(){
        console.log("style page back button clicked");
        showNewPage("landing_page");
      });
    }
}

function showNewPage(currentPage){
  var landing_page = document.getElementById('landing_page');
  var add_new_form_page = document.getElementById('add_new_form');
  var new_style_detail_page = document.getElementById('new_style_detail');
  var style_detail_page = document.getElementById('style_detail');

  switch(currentPage) {
    case 'landing_page':
      landing_page.style.display = 'block';
      add_new_form_page.style.display = 'none';
      new_style_detail_page.style.display = 'none';
      style_detail_page.style.display = 'none';
    break;
    case 'add_new_form':
      landing_page.style.display = 'none';
      add_new_form_page.style.display = 'block';
      new_style_detail_page.style.display = 'none';
      style_detail_page.style.display = 'none';
    break;
    case 'new_style_detail':
      landing_page.style.display = 'none';
      add_new_form_page.style.display = 'none';
      new_style_detail_page.style.display = 'block';
      style_detail_page.style.display = 'none';
    break;
    case 'style_detail':
      landing_page.style.display = 'none';
      add_new_form_page.style.display = 'none';
      new_style_detail_page.style.display = 'none';
      style_detail_page.style.display = 'block';
    break;
  }
}
