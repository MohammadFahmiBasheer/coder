function updateDate() {//80.83
  date=new Date();
  var setTime=document.getElementById("setTime");
  setTime.innerHTML=date.getHours()+":"+date.getMinutes();
  var setDate=document.getElementById("setDate");
  setDate.innerHTML=date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear();
}
setInterval(updateDate, 100);
onload+=updateDate();
function getColor() {
  var getColor=document.getElementById("setColor").value;
  localStorage.setItem("Color",getColor);
  document.getElementById("time").style.background=localStorage.getItem("Color");
  document.getElementById("setDate").style.color=localStorage.getItem("Color");
  document.body.style.background=localStorage.getItem("Color");
}
function setColor() {
  document.getElementById("setColor").style.background=localStorage.getItem("Color");
  document.getElementById("time").style.background=localStorage.getItem("Color");
  document.getElementById("setDate").style.color=localStorage.getItem("Color");
  document.body.style.background=localStorage.getItem("Color");
}
setColor();
