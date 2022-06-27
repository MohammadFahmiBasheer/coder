class Player {//86.89
  constructor() {
    var heightMain=document.getElementById("player");
    heightMain.style.height=screen.height+"px";
    if (screen.height<620) {
      heightMain.style.width=screen.width+"px";
    }

    var heightDiv=document.getElementById("content86");
    heightDiv.style.height=screen.height-300 +"px";
  }
}
onload+=new Player();


class Audio_Player {//87.90+88.91
  constructor() {
    this.audio_file=document.getElementById("audio_file");
    this.title_audio=document.getElementById("title_radio");
    this.player_pause_button=document.getElementById("play_pause");
    this.isPlayed=true;
    this.player_pause_button.addEventListener("click",()=>{
      this.player_pause();
    });
    // this.player_pause();
    this.names_radio=[];
    this.names_radio[0]="القران الكريم";
    this.names_radio[1]="الاقصى";
    this.names_radio[2]="غزة اف ام";
    this.souce_audio=[];
    this.souce_audio[0]="http://www.quran-radio.org:8002/;stream.mp3";
    this.souce_audio[1]="https://stream.alaqsavoice.ps/stream";
    this.souce_audio[2]="http://173.212.226.153:8000/source";
    this.server=0;
    if (localStorage.getItem("SAVE-POSITION")!=null) {
      this.server=localStorage.getItem("SAVE-POSITION");
    }
    this.setResource();
    document.getElementById("next").addEventListener("click",()=>{
      if (this.server<this.names_radio.length-1) {
        this.server++;
      }else {
        this.server=0;
      }
      this.setResource_c();
    });
    document.getElementById("back").addEventListener("click",()=>{
      if (this.server>0) {
        this.server--;
      }else {
        this.server=this.names_radio.length-1;
      }
      this.setResource_c();
    });
  }
  setResource(){
    this.audio_file.src=this.souce_audio[this.server];
    this.title_audio.innerHTML=this.names_radio[this.server];
    this.player_pause();
  }
  setResource_c(){
    localStorage.setItem("SAVE-POSITION",this.server);
    this.audio_file.src=this.souce_audio[this.server];
    this.title_audio.innerHTML=this.names_radio[this.server];
    this.player_pause_c();
  }
  player_pause(){
    if (this.isPlayed==false) {
      this.player_pause_button.src="png/pause.png";
      this.audio_file.play();
      this.isPlayed=true;
    }else {
      this.player_pause_button.src="png/play-button.png";
      this.audio_file.pause();
      this.isPlayed=false;
    }
  }
  player_pause_c(){
    if (this.isPlayed==true) {
      this.player_pause_button.src="png/pause.png";
      this.audio_file.play();
    }else {
      this.player_pause_button.src="png/play-button.png";
      this.audio_file.pause();
    }
  }
}
onload+=new Audio_Player();

class Volume89c {//89.92
  constructor() {
    this.audio_file=document.getElementById("audio_file");
    this.audio_file.volume=0.5;

    document.getElementById("volume").addEventListener("input",()=>{
      this.audio_file.volume=document.getElementById("volume").value/100;
    });
    document.getElementById("speed").addEventListener("input",()=>{
      this.audio_file.playbackRate=document.getElementById("speed").value/100;
    });
  }
}
onload+=new Volume89c();

class color {//90.93
  constructor() {
    var screen90=document.getElementById("screen90");
    screen90.style.height=screen.height+"px";
    // screen90.style.width=screen.width+"px";
    this.color1=document.getElementById("colo190_1");
    this.color1.addEventListener("click",()=>{
      this.select_color("color1");
    });
    this.color1=document.getElementById("colo190_2");
    this.color1.addEventListener("click",()=>{
      this.select_color("color2");
    });
    this.color1=document.getElementById("colo190_3");
    this.color1.addEventListener("click",()=>{
      this.select_color("color3");
    });
    this.color1=document.getElementById("colo190_4");
    this.color1.addEventListener("click",()=>{
      this.select_color("color4");
    });
    if (localStorage.getItem("COLOR")!=null) {
      this.select_color(localStorage.getItem("COLOR"));
    }else {
      this.select_color("color2");
    }
  }
  select_color(color){
    if (color=="color1") {
      document.getElementById("screen90").classList.add("cb");
      document.getElementById("screen90").style.background="radial-gradient(rgb(255, 0, 0),rgb(255, 255, 0),rgb(0, 255, 0),rgb(0, 255, 255),rgb(0, 0, 255),rgb(255, 0, 255))";
    }else if (color=="color2") {
      document.getElementById("screen90").style.background="red";
      document.getElementById("screen90").classList.remove("cb");
    }else if (color=="color3") {
      document.getElementById("screen90").style.background="green";
      document.getElementById("screen90").classList.remove("cb");
    }else if (color=="color4") {
      document.getElementById("screen90").style.background="blue";
      document.getElementById("screen90").classList.remove("cb");
    }
    localStorage.setItem("COLOR",color);
  }
}
onload+=new color();
