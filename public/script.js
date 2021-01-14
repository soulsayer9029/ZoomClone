const socket=io('/');
const myVideo=document.createElement('video');
const videoGrid=document.querySelector('#video-grid');
myVideo.muted=true;


let myVideoStream;
navigator.mediaDevices.getUserMedia({
    video:true,
    audio:true
}).then(stream=>{
    myVideoStream=stream
    addVideoStream(myVideo,stream)
   
})
socket.emit('join-room',ROOM_ID);

socket.on('user-connected',()=>{
    connectToNewUser();
})
const addVideoStream=(video,stream)=>{
    video.srcObject=stream;
    video.addEventListener('loadedmetadata',()=>{
        video.play();
    })
    videoGrid.append(video)
}


const connectToNewUser=()=>{
    console.log('new user joined') 
}