var islive97=false;//97.94
var shareLocation;
var accessLocation;
document.getElementById("getLocation").onclick=()=>{
  document.getElementById("map").style.width=screen.height*7/10;
  shareLocation=navigator.geolocation.watchPosition(
    function(position){
      accessLocation=true;
      document.getElementById("alert").innerHTML=`
      <div class="alert alert-success" role="alert">
        يتم عرض خريطة موقعك بشكل مباشر
      </div>`;
      document.getElementById("getLocation").innerHTML="ايقاف المشاركة";
      islive97=true;
      document.getElementById("map").innerHTML=`
      <iframe height="500px" width="100%" style="border:0px;" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://www.openstreetmap.org/export/embed.html?bbox=${position.coords.longitude},${position.coords.latitude}" style="border: 1px solid black"></iframe>
      `;
      localStorage.setItem("longitude",position.coords.longitude);
      localStorage.setItem("latitude",position.coords.latitude);
  },function(error){
    switch (error.code) {
      case error.PERMISSION_DENIED:
        document.getElementById("alert").innerHTML=`
        <div class="alert alert-danger mt-3 mb-3" role="alert">
          لقد قمت برفض الوصول الى موقعك، يرجى المحاولة مرة اخرى والموافقة
        </div>`;
        break;
      case error.UNKNOWN_ERROR:
        document.getElementById("alert").innerHTML=`
        <div class="alert alert-danger mt-3 mb-3" role="alert">
          حدث خطئ غير معروف
        </div>`;
        break;
      default:
      document.getElementById("alert").innerHTML=`
      <div class="alert alert-danger mt-3 mb-3" role="alert">
        حدث خطئ غير معروف
      </div>`;
      break;
    }
    console.log(error);
  });
  if (islive97===false&&accessLocation===true) {
    document.getElementById("alert").innerHTML=`
    <div class="alert alert-success" role="alert">
      يتم عرض خريطة موقعك بشكل مباشر
    </div>`;
    document.getElementById("getLocation").innerHTML="ايقاف المشاركة";
    islive97=true;
  } else if(islive97===true&&accessLocation===true){
    document.getElementById("alert").innerHTML=`
    <div class="alert alert-success" role="alert">
      تم ايقاف تشغيل تحديد الموقع بنجاح
    </div>`;
    navigator.geolocation.clearWatch(shareLocation);
    document.getElementById("getLocation").innerHTML="عرض موقعي";
    islive97=false;
  }
}
