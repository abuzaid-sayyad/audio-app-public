let audioElement = new Audio();
audioElement.src = "/audio/kahani-suno.mp3";
let masterPlay = document.getElementById("masterPlay");
let pp = document.getElementById("pp");
let progressBar = document.getElementById("progressBar");
let previous = document.getElementById("previous");
let next = document.getElementById("next");
let songItemPlay = Array.from(document.getElementsByClassName("songItemPlay"));
let masterSongName = document.getElementById("masterSongName");
let singer = document.getElementById("singer");
let songImage = document.getElementById("song-image");
let volumeController = document.getElementById("volume-controller");
let audioList = document.getElementById("song-list");
let songIndex = 0;
const allSong = [
    {songName: "Kahani Suno 2.0", singer:"Kaifi Khalil", filePath: "/audio/kahani-suno.mp3", image: "/images/song-images/kahani-suno.jpg"},
    {songName: "Ik Lamha", singer:"Azaan Sami Khan", filePath: "/audio/ik-lamha.mp3", image: "/images/song-images/ik-lamha.jpg"},
    {songName: "Kesariya", singer:"Arijit Singh", filePath: "/audio/kesariya.mp3", image: "/images/song-images/kesariya.jpg"},
    {songName: "Apna Bana Le", singer:"Arijit Singh & Sachin-Jigar", filePath: "/audio/apna-bana-le.mp3", image: "/images/song-images/apna-bana-le.webp"},
    {songName: "Tu Maan Meri Jaan", singer:"King, Saurabh Lokhande", filePath: "/audio/tu-maan-meri-jaan.mp3", image: "/images/song-images/tu-maan-meri-jaan.jpg"},
    {songName: "Toh Phir Aao", singer:"Mustafa Zahid", filePath: "/audio/to-fir-aao.mp3", image: "/images/song-images/to-phir-aao.jpg"},
    {songName: "Ae Dil Hai Mushkil", singer:"Pritam, Arijit Singh , Pritam Chakraborty", filePath: "/audio/ae-dil-hai-mushkil.mp3", image: "/images/song-images/ae-dil-hai-mushkil.jpg"},
    {songName: "Channa Mereya", singer:"Pritam, Arijit Singh , Pritam Chakraborty", filePath: "/audio/channa-mereya.mp3", image: "/images/song-images/channa-mereya.jpg"},
    {songName: "Tu Chahiye", singer:"Pritam, Atif Aslam", filePath: "/audio/tu-chahiye.mp3", image: "/images/song-images/tu-chahiye.jpg"},
    {songName: "Jeda Nasha Teri Ankha Vich Aave", singer:"Amar Jalal, Yohani", filePath: "/audio/jeda-nasha.mp3", image: "/images/song-images/Jehda-Nasha.jpg"},
    {songName: "Bewafa Tera Masoom Chehra", singer:"Jubin Nautiyal, Rashmi V", filePath: "/audio/bewafa-tera-masoom-chehra.mp3", image: "/images/song-images/Bewafa-Tera-Masoom-Chehra.jpg"},
    {songName: "Tera Zikr", singer:"Darshan Raval", filePath: "/audio/tera-zikr.mp3", image: "/images/song-images/tera-zikr.jpg"},
    {songName: "Mitti Di Khushboo", singer:"Ayushmann Khurrana", filePath: "/audio/mitti-di-khushboo.mp3", image: "/images/song-images/Mitti-Di-Khushboo.jpg"},
    {songName: "Kali Kali Zulfo ke", singer:"Madhur Sharma", filePath: "/audio/kali-kali-zulfo-ke.mp3", image: "/images/song-images/kali-kali-zulfo-ke.jpg"},
    {songName: "Bewafa Tera Muskurana", singer:"Jubin Nautiyal, Meet Bros", filePath: "/audio/bewafa-tera-muskurana.mp3", image: "/images/song-images/Bewafa-Tera-Muskurana.jpg"},
    {songName: "Hamnava Mere", singer:"Jubin Nautiyal", filePath: "/audio/humnava-mere.mp3", image: "/images/song-images/humnava-mere.jpg"},
    {songName: "Bhula Dunga", singer:"Darshan Raval", filePath: "/audio/bhula-dunga.mp3", image: "/images/song-images/bhula-dunga.jpeg"},
    {songName: "Ek Tarfa", singer:"Darshan Raval", filePath: "/audio/ek-tarfa.mp3", image: "/images/song-images/ek-tarfa.jpg"},
    {songName: "Hawa Banke", singer:"Darshan Raval", filePath: "/audio/hawa-banke.mp3", image: "/images/song-images/hawa-banke.jpg"},
    {songName: "Ajao Meri Tamanna", singer:"Javed Ali, Jojo Nathaniel", filePath: "/audio/ajao-meri-tamanna.mp3", image: "/images/song-images/ajao-meri-tamanna.jpg"},
    {songName: "Tera Hone Laga hu", singer:"Atif Aslam, Alisha Chinai", filePath: "/audio/tera-hone-laga-hu.mp3", image: "/images/song-images/ajao-meri-tamanna.jpg"},
    {songName: "I Love You", singer:"Clinton Cerejo, Ash King", filePath: "/audio/i-love-you.mp3", image: "/images/song-images/i-love-you.jpg"},
    {songName: "Humko Pyar Hua", singer:"K.K", filePath: "/audio/humko-pyar-hua.mp3", image: "/images/song-images/humko-pyar-hua.jpg"},
];

var songList = "";
const playButton = document.getElementsByClassName("playButton");
allSong.forEach((item, index) => {
    let audio = new Audio();
    audio.src = item.filePath;
    audio.onloadedmetadata = function() {
        let timestamp = document.getElementsByClassName("timestamp");
        var duration = audio.duration;
        const min = Math.floor(duration/60);
        const sec = Math.floor(duration%60);
        const time = `${min} : ${sec}`;
        songList += `<div class="flex items-center justify-between sm:px-5 py-2 rounded-md">
        <div class="flex items-center">
            <span class="text-sm sm:text-base text-[#b3b3b3] font-medium">${index +1}</span>
            <div class="ml-5">
                <p class="text-sm sm:text-base text-white font-normal">${item.songName}</p>
                <p class="text-xs sm:text-sm text-[#b3b3b3] font-normal">${item.singer}</p>
            </div>
        </div>
        <p class="text-xs sm:text-sm text-[#b3b3b3] font-normal song">${time}</p>
    </div>`;
document.getElementById("song-list").innerHTML = songList;
}
});

let song = Array.from(document.getElementsByClassName("song"));
song.forEach(ele => {
    console.log(ele);
    ele.addEventListener("click", (e)=>{
        console.log(e.target);
    })
})

masterPlay.addEventListener("click", ()=>{
    if(audioElement.paused || audioElement.currentTime < 0){
        audioElement.play();
        masterPlay.classList.remove("bg-white");
        pp.classList.remove("play");
        masterPlay.classList.add("bg-green-500");
        pp.classList.add("pause");
    }else{
        audioElement.pause();
        masterPlay.classList.add("bg-white");
        masterPlay.classList.remove("bg-green-500");
        pp.classList.add("play");
        pp.classList.remove("pause");
    }
})

const musicDuration = document.getElementById("musicDuration");
audioElement.addEventListener("timeupdate", ()=>{
    const progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    progressBar.value = progress;
    const musicDur = audioElement.duration;
    const min = Math.floor(musicDur/60);
    const sec = Math.floor(musicDur%60);
    musicDuration.innerText = `${min} : ${sec}`;
})

progressBar.addEventListener("change", ()=>{
    audioElement.currentTime = progressBar.value * audioElement.duration/100;
})

volumeController.addEventListener("input", function() {
    audioElement.volume = this.value;
  });

const makeAllPlays = ()=> {
    songItemPlay.forEach(element => {
        element.classList.remove("bg-green-500");
        element.classList.add("bg-white");
    })
}

songItemPlay.forEach(element => {
    element.addEventListener("click", (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove("bg-white");
        e.target.classList.add("bg-green-500");
        audioElement.src = `audio/${songIndex+1}.mp3`;
        masterSongName.innerText = allSong[songIndex].songName;
        singer.innerText = allSong[songIndex].singer;
        audioElement.currentTime = "0";
        audioElement.play();
        masterPlay.classList.remove("bg-white");
        masterPlay.classList.add("bg-green-500");
    })
})

next.addEventListener("click", ()=>{
    songIndex++;
    if(songIndex >= allSong.length){
        songIndex = 0;
    }
    audioElement.src = allSong[songIndex].filePath;
    masterSongName.innerText = allSong[songIndex].songName;
    singer.innerText = allSong[songIndex].singer;
    songImage.src = allSong[songIndex].image;
    audioElement.currentTime = "0";
    audioElement.play();
    masterPlay.classList.remove("bg-white");
    masterPlay.classList.add("bg-green-500");
    pp.classList.remove("play");
    pp.classList.add("pause");
})

previous.addEventListener("click", ()=>{
    songIndex--;
    if (songIndex < 0) {
        songIndex = allSong.length - 1;
    }
    audioElement.src = allSong[songIndex].filePath;
    masterSongName.innerText = allSong[songIndex].songName;
    singer.innerText = allSong[songIndex].singer;
    songImage.src = allSong[songIndex].image;
    audioElement.currentTime = "0";
    audioElement.play();
    masterPlay.classList.remove("bg-white");
    masterPlay.classList.add("bg-green-500");
    pp.classList.remove("play");
    pp.classList.add("pause");
})
