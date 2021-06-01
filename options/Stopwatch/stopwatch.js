var hour=0,minute=0,second=0;
var start=false;
var interval;
$(".start").on("click",function(){
  if(!start){
  start=true;
  $(".start").html("STOP");
  interval=setInterval(timeProcess,1000);
  }
  else if(start){
    clearInterval(interval);
    start=false;
    $(".start").html("START");
  }
});
$(".reset").on("click",function(){
  reset();
});
function timeProcess(){
  second=parseInt(second)+1;
  minute=parseInt(minute)+parseInt(second/60);
  hour=parseInt(hour)+parseInt(minute/60);
  if(second==60){
    second=0;
  }
  if(minute==60){
    minute=0;
  }
  if(second<10){
    second="0"+second;
  }
  if(minute<10){
    minute="0"+minute;
  }
  if(hour<10){
    hour="0"+hour;
  }
  $("#hour").html(hour);
  $("#minute").html(minute);
  $("#second").html(second);
}
function reset(){
  second=0;
  minute=0;
  hour=0;
  if(start){
    $(".start").html("START");
  }
  start=false;
  clearInterval(interval);
  $("#hour").html("00");
  $("#minute").html("00");
  $("#second").html("00");

}
