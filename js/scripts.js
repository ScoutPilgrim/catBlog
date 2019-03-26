let lightFlag = true;
let borderFlag = false;
$(document).ready(function() {
  $("button#light").click(function(){
    if(lightFlag){
      $('body').removeClass('lightClass');
      $('body').addClass('darkClass');
      $('btn').addClass('darkClass');
      $("#light").text('Light');
      lightFlag = flagToggle(lightFlag);
    }else{
      $('body').removeClass('darkClass');
      $("body").addClass('lightClass');
      $('btn').removeClass('darkClass');
      $("#light").text('Dark');
      lightFlag = flagToggle(lightFlag);
    }
  });
  $('#border').click(function() {
    if(!borderFlag){
      $('p').addClass("borderWrapper");
      borderFlag = flagToggle(borderFlag);
    }else{
      $('p').removeClass('borderWrapper');
      borderFlag = flagToggle(borderFlag);
    }
  });
  function flagToggle(myFlag){
    console.log("flagToggle called" + myFlag);
    if(myFlag==true){
      myFlag = false;
    }else{
      myFlag = true;
    }
    return myFlag;
  }
});
