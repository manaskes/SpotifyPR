console.log("hello every one ");

//Initialize the variable
let songIndex = 0;
let audioElement = new Audio("song/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let rangeProgressBar = document.getElementById("rangeProgressBar");
let masterSongName = document.getElementById("masterSongName");
let songItem = Array.from(document.getElementsByClassName("songItem"));
let song = [
  {
    songName: "Let me love u",
    filePath: "song/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "True Love",
    filePath: "song/2.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songName: "Made You Look",
    filePath: "song/3.mp3",
    coverPath: "covers/3.jpg",
  },
  {
    songName: "Anti-HeroTaylor Swift",
    filePath: "song/4.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    songName: "Just Wanna RockLil Uzi Vert",
    filePath: "song/5.mp3",
    coverPath: "covers/5.jpg",
  },
];

songItem.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = song[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = song[i].songName;
});

// audioElement.play()

//Handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});

//add event listener
audioElement.addEventListener("timeupdate", () => {
  //Update seek bar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  rangeProgressBar.value = progress;
});

rangeProgressBar.addEventListener("change", () => {
  audioElement.currentTime =(rangeProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlay = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-circle-pause");
      element.classList.add("fa-circle-play");
}
  );
};

Array.from(document.getElementsByClassName("songItemPlay"))

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
  element.addEventListener("click", (e) => {
      makeAllPlay();
      songIndex  = parseInt(e.target.id)
      e.target.classList.remove("fa-circle-play");
      e.target.classList.add("fa-circle-pause");
      audioElement.src=`song/${songIndex +1}.mp3`;
      masterSongName.innerText=song[songIndex].songName;
      gif.style.opacity = 1;
      audioElement.currentTime = 0;
      audioElement.play()
      gif.style.opacity = 1;
    });
  }
);




document.getElementById('next').addEventListener('click',()=>{
  if(songIndex>=9){
    songIndex=0;
  }else{
    songIndex +=1; 
  }
  audioElement.src=`song/${songIndex +1}.mp3`;
  masterSongName.innerText=song[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play()
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
})

document.getElementById('previous').addEventListener('click',()=>{
  if(songIndex<=0){
    songIndex=0;
  }else{
    songIndex +=1; 
  }
  audioElement.src=`song/${songIndex +1}.mp3`;
  masterSongName.innerText=song[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play()
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
})
