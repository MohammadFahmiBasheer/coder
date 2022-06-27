let arabic=document.getElementById("arabic");//54.51
let english=document.getElementById("english");
let title54=document.getElementById("title54");
let text54=document.getElementById("text54");
let about54=document.getElementById("about54");
let about_text54=document.getElementById("about-text54");
let contact54=document.getElementById("contact54");
arabic.onclick=()=>{
  setLanuage("arabic");
  localStorage.setItem("Lang","arabic");
}
english.onclick=()=>{
  setLanuage("english");
  localStorage.setItem("Lang","english");
}
onload=()=>{
  setLanuage(localStorage.getItem("Lang"));
}
function setLanuage(getLanguage) {
  if (getLanguage==="arabic") {
    title54.innerHTML="مبرمج محمد";
    text54.innerHTML="مرحبا بكم في صفحة مبرمج محمد";
    about54.innerHTML="حولنا";
    about_text54.innerHTML="انا مبرمج كمبيوتر ، خريج تخصص حوسبة تطبيقية من جامعة فلسطين التقنية - خضوري";
    contact54.innerHTML="اتصل بنا";
  } else if(getLanguage==="english"){
    title54.innerHTML="coder mohammad";
    text54.innerHTML="Welcome to website of coder mohammad";
    about54.innerHTML="About US";
    about_text54.innerHTML="I am a computer programmer, a graduate of Applied Computing from Palestine Technical University - Kadoorie";
    contact54.innerHTML="contact us";
  }
}
