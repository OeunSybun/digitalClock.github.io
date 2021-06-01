var hour,minute,second;
var start=false;
var interval;
$(".setTimer").on("click",function(){
  getSelectValue();
  if(hour=="00"&&minute=="00"&&second=="00"){
    $(".setTimer").css({fontSize:"0.9rem"})
    $(".setTimer").html("Please Select Items Above...");
    setTimeout(function(){
      $(".setTimer").css({fontSize:"1.8rem"});
      $(".setTimer").html("Set Timer");
    },3000);
  }
  else{
    if(!start){
      start=true;
      $(".setTimer").css({fontSize:"0.9rem"});
      $(".setTimer").html("Timer is Running, Press To Stop...");
    }
    else if(start){
      location.reload();
    }
  }
  if(start){
    interval=setInterval(timeProcess,1000);
  }
});

function getSelectValue(){
  hour=$("#hour").find(":selected").text();
  minute=$("#minute").find(":selected").text();
  second=$("#second").find(":selected").text();
  if(hour=="Hour"){
    hour=0;
  }
  if(minute=="Minute"){
    minute=0;
  }
  if(second=="Second"){
    second=0;
  }
  if(parseInt(hour)<10){
    hour="0"+hour;
  }
  if(parseInt(minute)<10){
    minute="0"+minute;
  }
  if(parseInt(second)<10){
    second="0"+second;
  }
  $(".hour").html(hour);
  $(".minute").html(minute);
  $(".second").html(second);
}
function timeProcess(){
  if(second==0){
    second=60;
  }
  second=parseInt(second)-1;
  minute=parseInt(minute)-Math.floor(parseInt(second)/59);
  if(minute==-1){
    if(parseInt(hour)>0){
      minute=59;
      hour=parseInt(hour)-1;
    }
    else if(parseInt(second)==0&&parseInt(hour)==0){
      alert();
    }
  }
  if(hour<10){
    $(".hour").html("0"+parseInt(hour));
  }
  else{
    $(".hour").html(hour);
  }
  if(minute<10){
    $(".minute").html("0"+parseInt(minute));
  }
  else{
    $(".minute").html(minute);
  }
  if(second<10){
    $(".second").html("0"+parseInt(second));
  }
  else{
    $(".second").html(second);
  }
  if(parseInt(hour)==0&&parseInt(minute)==0&&parseInt(second)==0){
    alert();
  }
}
function alert(){
  clearInterval(interval);
  var audio=new Audio("timer.mp3");
  audio.play();
  setTimeout(function(){
    audio.pause();
    audio.currentTime=0;
    location.reload();
  },50000);
}
