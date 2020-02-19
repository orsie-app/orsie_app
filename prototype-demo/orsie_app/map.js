/**
 * To do:
 * 
 * update map with new colors/specs
 * add zoom with viewbox change?
 * on click map itself clearTimeout of roomClicked for other elements?
 */

let theEventData;

window.addEventListener("DOMContentLoaded", function(){
    function getData(){
        fetch('./events.json')
        .then(data => data.json())
        .then(data => {
            theEventData = data.events;
        })
    }
    getData();
})


// pinch zoom function
function zoom(elementTouched, zoomer){
    //object to store touch positions
    elementTouched.addEventListener("touchmove",(e) => {
        // get all touches
        let touches = e.targetTouches;
        // only run if two or more fingers are touching
        if(touches.length==2){
            // zoom in
            gsap.to(zoomer,{
                duration: 0.005,
                transformOrigin: "center center",
                scale: zoomer.style.width + Math.abs(((touches[0].pageX - touches[1].pageX) + (touches[1].pageY/2 - touches[1].pageY/2))/100),
            });
        }else{
            // move
            gsap.to(zoomer,{
                duration: 0.05,
                x: (zoomer.style.x + (touches[0].pageX - window.innerWidth/2)*9),
                y: (zoomer.style.y + (touches[0].pageY - (window.innerHeight*0.8)/2))*9,
            });
        }

    })
}

//  set object for onload
let object = document.querySelector('#floorMap');

object.onload = function () {

    // setting up map elements
    let map = document.querySelector('#floorMap').contentDocument;
    // svg
    let svgMap = map.querySelector("svg");
    // map group
    let mapContainer = map.querySelector("#Layer_2");
    
    let globalClass = map.querySelector("#globalClassroom");
    let cfce116 = map.querySelector("#_116");
    let cfce117 = map.querySelector("#_117");
    let cfce118 = map.querySelector("#_118");
    let cfce119 = map.querySelector("#_119");
    let cfce123 = map.querySelector("#_123");
    let cfceLink = map.querySelector("#cfce-link");
    let ssb116 = map.querySelector("#ssb-rm116");

    // elements to be added with updated map
    let cfce123b = map.querySelector("#_123B");
    let atrium = map.querySelector("#mrc");



    // click events for map elements
    // globalClass.addEventListener("click", roomClicked(1))
    // cfce116.addEventListener("click", roomClicked(2))
    // cfce117.addEventListener("click", roomClicked(3));
    // cfce118.addEventListener("click", roomClicked(4));
    // atrium.addEventListener("click", roomClicked(5));
    // cfce119.addEventListener("click", roomClicked(6));
    // cfce123.addEventListener("click", roomClicked(7));
    // cfce123b.addEventListener("click", roomClicked(8));
    // cfceLink.addEventListener("click", roomClicked(9));
    // ssb116.addEventListener("click", roomClicked(10));

    // animate fill on click
    function roomClicked(zone){
        // // this animation only works on one room?
        // gsap.to(this, 0.5, {
        //     // temporary colour
        //     fill: "green",
        //     ease: Power2.easeInOut,
        // });
        // setTimeout(() => {
        //     gsap.to(this, 0.5, {
        //         fill: "3a556d",
        //         ease: Power2.easeInOut,
        //     });
        // }, 5000);

        let filteredEvents = theEventData.filter(even => even.zone == zone);
        let title = document.querySelector("#map-info-title");
        let text = document.querySelector("#map-info-text");

        title.innerText = filteredEvents[0].name;
        text.innerText = filteredEvents[0].description;

        console.log(`room clicked`);
    }


    // can add a clear timeout here if needed
    // map.addEventListener("click", function(){
    //     console.log("clicked map");
    // })

    // call to enable pinch zoom;
    zoom(svgMap,mapContainer);
}