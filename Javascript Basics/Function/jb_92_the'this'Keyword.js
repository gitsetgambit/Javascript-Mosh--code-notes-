// what "this" keyword represents
// if 
// method is inside obj it represents obj
// if this is inside function then represents global (window, global)

// todo: situation-1
const video = {
    title: 'a',
    play() {
        console.log(this);
    }
}
video.play()

// todo: situation-2
// adding "stop" method to the "video" object declared above
video.stop = function () {
    console.log(this);
}
video.stop() // now again it is carrying entire object along with the new "stop" method

// todo: situation-3
function playVideo(title) {
    // console.log(this); // this carrys the window object because it is declare inside a normal function
}
playVideo() 

// todo: situation-4
console.log(this); // outside any function or obj "this" will contain the window obj

// todo: situation-5
function Playback(title) {
    this.title = title
    console.log(this);
}
const c = new Playback('b') //new keyword creat a empty object and all "this" keyword variables will point to that empty object

// todo: situation-6
const pause = {
    scene : 'a',
    timestamps : ['a','b','c','d'],
    showTags(){
        this.timestamps.forEach(tag => {
            console.log(this.scene, tag); 
            // here this represents the window 
            // function because it is inside this Playback 
            // function which is a normal function here
        });
    }
}
pause.showTags();
