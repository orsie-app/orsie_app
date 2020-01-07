document.querySelector("#lowerInfo").style.top = `${window.innerHeight - 75}px`;

let touchTop = false;
let eventsOpen = false;

  let draggable = document.getElementById('dragBar');
  let draggableParent = document.getElementById('dragBar').parentElement;

  draggable.addEventListener('touchmove', function(event) {
    let touch = event.targetTouches[0];
    
    // Place element where the finger is
    draggableParent.style.top = touch.pageY-25 + 'px';
    event.preventDefault();

    // calculate the amount of the screen is covered by the draggable element
    let percentCovered = (window.innerHeight - draggableParent.offsetTop)/window.innerHeight;
    // adjust the fader div color accordingly
    document.getElementById("fader").style.backgroundColor = `#000000${Math.floor(percentCovered*100-10)}`;

  }, false,{passive:false});

  draggable.addEventListener('touchend', function(event) {    
    // Place element where the finger is if not at the top
    if(touchTop == false){
        gsap.to(draggableParent, {
            duration: 0.5,
            top: 0,
            ease: "Power3.Out",
        })
        // element is now touching the top
        touchTop = true;
        event.preventDefault();
        // set fader div to 0.9 alpha black
        gsap.to("#fader", {
            duration: 0.5,
            backgroundColor: "rgba(0,0,0,0.9)",
            ease: "Power3.InOut",
        })

    }else{
        // if the draggable element is at the top, move to bottom on next touch
        gsap.to(draggableParent, {
            duration: 0.5,
            top: window.innerHeight - 75,
            ease: "Power3.Out",
        })
        touchTop = false;
        event.preventDefault();
        // fade the fader div to completely transparent 
        gsap.to("#fader", {
            duration: 0.5,
            backgroundColor: "rgba(0,0,0,0)",
            ease: "Power3.InOut",
        })
    }
  }, false,{passive:false});


let eventsTab = document.querySelector("#eventsTab");

eventsTab.addEventListener("touchmove", function(event){
    let touch = event.targetTouches[0];

    eventsTab.style.left = touch.pageX - window.innerWidth + 25 + 'px';
    eventsTab.style.zIndex = 4;
    event.preventDefault();

     // calculate the amount of the screen is covered by the draggable element
     let percentCovered = (window.innerWidth + eventsTab.offsetLeft)/window.innerWidth;
     // adjust the fader div color accordingly
     document.getElementById("fader").style.backgroundColor = `#000000${Math.floor(percentCovered*100-10)}`;
     // adjust border radius accordingly
     eventsTab.style.borderTopRightRadius = `${500 - window.innerWidth * 0.07 - percentCovered * 500}px`;
     eventsTab.style.borderBottomRightRadius = `${500 - window.innerWidth * 0.07 - percentCovered * 500}px`;
     // adjust space from top
     eventsTab.style.top = `${25 - percentCovered * 25}%`; 
}, false,{passive:false});

eventsTab.addEventListener("touchend", function(event){
     // Place element where the finger is if not at the top
     if(eventsOpen == false){
         gsap.to(eventsTab, {
             duration: 0.5,
             top: 0,
             left: 0,
             borderTopRightRadius: 0,
             borderBottomRightRadius: 0,
             ease: "Power3.Out",
         })
         // element is now touching the top
         eventsOpen = true;
         event.preventDefault();
         // set fader div to 0.9 alpha black
         gsap.to("#fader", {
             duration: 0.5,
             backgroundColor: "rgba(0,0,0,0.9)",
             ease: "Power3.InOut",
         }) 
     }else{
         // if the draggable element is at the top, move to bottom on next touch
         gsap.to(eventsTab, {
             duration: 0.5,
             top: window.innerHeight/4,
             left: 0 - window.innerWidth,
             borderTopRightRadius: 500,
             borderBottomRightRadius: 500,
             zIndex: 3,
             ease: "Power3.Out",
         })
         eventsOpen = false;
         event.preventDefault();
         // fade the fader div to completely transparent 
         gsap.to("#fader", {
             duration: 0.5,
             backgroundColor: "rgba(0,0,0,0)",
             ease: "Power3.InOut",
         })
     }
})