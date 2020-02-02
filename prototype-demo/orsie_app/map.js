/**
 * To do:
 * 
 * update map with new colors/specs
 * add zoom with viewbox change?
 * on click map itself clearTimeout of roomClicked for other elements?
 */


//  set object for onload
let object = document.querySelector('#floorMap');

object.onload = function () {
    // setting up map elements
    let map = document.querySelector('#floorMap').contentDocument;

    let activeRooms = [
        {roomName:"Global Classroom", clickElement: map.querySelector("#gglobalClassroom"), animateElement:map.querySelector("#globalClassroom")},
        {roomName:"CFCE 116", clickElement:map.querySelector("#gcfce116"), animateElement:map.querySelector("#cfce116")},
        {roomName:"CFCE 117", clickElement:map.querySelector("#gcfce117"), animateElement:map.querySelector("#cfce117")},
        {roomName:"CFCE 118", clickElement:map.querySelector("#gcfce118"), animateElement:map.querySelector("#cfce118")},
        {roomName:"CFCE 119", clickElement:map.querySelector("#gcfce119"), animateElement:map.querySelector("#cfce119")},
        {roomName:"CFCE 123", clickElement:map.querySelector("#gcfce123"), animateElement:map.querySelector("#cfce123")},
        {roomName:"CFCE 123B", clickElement:map.querySelector("#gcfce123B"), animateElement:map.querySelector("#cfce123B")},
        {roomName:"Atrium", clickElement:map.querySelector("#gmrc"), animateElement:map.querySelector("#mrcRect")},
        {roomName:"CFCE/SSB Link", clickElement:map.querySelector("#gssbLink"), animateElement:map.querySelector("#ssbLink")},
        {roomName:"SSB 116A/B", clickElement:map.querySelector("#gssb116"), animateElement:map.querySelector("#ssb116")}
    ];

    // adding click event to all active rooms
    activeRooms.forEach(activeRoom => {
        activeRoom.clickElement.addEventListener("click", function (event) {
            let t1 = gsap.timeline();
            t1.to(activeRoom.animateElement, 
                {fill: "orange",
                ease: "Power2.easeInOut",
                duration: 1.5
            });
            t1.to(activeRoom.animateElement, 
                { delay: 5,
                fill: "7fbdad",
                ease: "Power2.easeInOut",
                duration: 0.5
            });
            console.log(`${activeRoom.roomName} room was clicked`);
        });
    });

}