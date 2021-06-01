function timeProcess(){
  var h=new Date().getHours();
  var m=new Date().getMinutes();
  var s=new Date().getSeconds();
  if(h<10){
    h="0"+h;
  }
  if(m<10){
    m="0"+m;
  }
  if(s<10){
    s="0"+s;
  }
  if(h>=12){
    if(parseInt("0"+(h-12))>=10){
      $("#hour").html(h-12);
    }
    else{
      $("#hour").html("0"+(h-12));
    }
    $("#minute").html(m);
    $("#second").html(s);
    $("#period").html("  PM  ")
  }
  else{
    $("#hour").html(h);
    $("#minute").html(m);
    $("#second").html(s);
    $("#period").html("  AM  ")
  }
}
setInterval(timeProcess,1000);
