var hour,minute,period;
var start=false;
var interval;
var h,m;
var audio;
$(".set-alarm").on("click",function(){
  getSelectValue();
  if((hour=="00"&&minute=="00")||period==" "){
      $(".setAlarm").css({fontSize:"1rem"});
      $(".setAlarm").html("!!!Please Select The Items Above!!!");
      setTimeout(function(){
        $(".setTimer").css({fontSize:"1.8rem"});
        $(".setAlarm").html("Set Alarm");
      },3000);
    }
  else{
      if(!start){
        start=true;
        $(".setAlarm").css({fontSize:"1rem"});
        $(".setAlarm").html("Alarm is Turning On, Press To Stop...");
      }
      else if(start){
        location.reload();
      }
  }
  if(start){
    alarm();
  }
});

//Function
function getSelectValue(){
  hour=$("#hour").find(":selected").text();
  minute=$("#minute").find(":selected").text();
  period=$("#period").find(":selected").text();
  if(hour==="Hour"){
    hour=0;
  }
  if(minute==="Minute"){
    minute=0;
  }
  if(period==="Period"){
    period=" ";
  }
  if(parseInt(hour)<10){
    hour="0"+hour;
  }
  if(parseInt(minute)<10){
    minute="0"+minute;
  }
  $(".hour").html(hour);
  $(".minute").html(minute);
  $(".period").html(period);
}
function alarm(){
  interval=setInterval(function(){
    h=new Date().getHours();
    m=new Date().getMinutes();
    var p="AM";
    if(parseInt(h)>12){
      h=h-12;
      p="PM";
    }
    if(h==12){
      p="PM";
    }
    if(h==hour&&m==minute&&p==period){
      console.log(h)
      console.log(m);
      console.log(p);
      audio=new Audio("alarm.mp3");
      audio.play();
      $(".setAlarm").on("click",function(){
        location.reload();
      });
      setTimeout(function(){
        audio.pause();
        audio.currentTime=0;
      },50000);
      clearInterval(interval);
    }
  },1000);
}
