document.querySelector("#lowerInfo").style.top = `${window.innerHeight - 75}px`;

let touchTop = false;

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