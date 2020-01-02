function dragElement(element) {
  let elementPos = 0
  let userPos = 0;
  let atTop = false;
  
  if (document.querySelector(`.${element.id}DragPoint`)) {
    // if present, the  is where you move the DIV from:
    document.querySelector(`.${element.id}DragPoint`).onmousedown = dragMouseDown;
  } else {
      alert("please assign a drag Point by adding the ${element.id}DragPoint class to the element you want to be draggable");
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    userPos = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    elementPos = userPos - e.clientY;
    userPos = e.clientY;
    // set the element's new position:
    if(element.offsetTop >= 25 && atTop == false && e.clientY <= window.innerHeight - 100){
        element.style.top = `${element.offsetTop - elementPos}px`;
    }else if(e.clientY <= window.innerHeight - 100){
        element.style.top = "26px";
    }else{
        element.style.top = `${window.innerHeight - 75}px`;
    }

    // use this to change the background opacity of an intermediate element between the foreground and background
    let percentCovered = (window.innerHeight - element.offsetTop)/window.innerHeight;
    document.getElementById("fader").style.backgroundColor = `#000000${Math.floor(percentCovered*100-10)}`;
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// example call
dragElement(document.getElementById("lowerInfo"));

let touchTop = false;

  let draggable = document.getElementById('dragBar');
  let draggableParent = document.getElementById('dragBar').parentElement;

  draggable.addEventListener('touchmove', function(event) {
    let touch = event.targetTouches[0];
    
    // Place element where the finger is
    draggableParent.style.top = touch.pageY-25 + 'px';
    event.preventDefault();

    let percentCovered = (window.innerHeight - draggableParent.offsetTop)/window.innerHeight;
    document.getElementById("fader").style.backgroundColor = `#000000${Math.floor(percentCovered*100-10)}`;

  }, false,{passive:false});

  draggable.addEventListener('touchend', function(event) {    
    // Place element where the finger is
    if(touchTop == false){
        gsap.to(draggableParent, {
            duration: 0.5,
            top: 0,
            ease: "Power3.Out",
        })
        touchTop = true;
        event.preventDefault();
        gsap.to("#fader", {
            duration: 0.5,
            backgroundColor: "rgba(0,0,0,0.9)",
            ease: "Power3.InOut",
        })

    }else{
        gsap.to(draggableParent, {
            duration: 0.5,
            top: window.innerHeight - 75,
            ease: "Power3.Out",
        })
        touchTop = false;
        event.preventDefault();
        gsap.to("#fader", {
            duration: 0.5,
            backgroundColor: "rgba(0,0,0,0)",
            ease: "Power3.InOut",
        })
    }
  }, false,{passive:false});


