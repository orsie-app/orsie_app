/**
 * To do:
 * 
 * update map with new colors/specs
 * add zoom with viewbox change?
 * on click map itself clearTimeout of roomClicked for other elements?
 */

let theEventData;

window.addEventListener("DOMContentLoaded", function () {
    function getData() {
        fetch('./events.json')
            .then(data => data.json())
            .then(data => {
                theEventData = data.events;
            })
    }
    getData();
})
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

    let activeRooms = [{
            zone: 1,
            roomName: "Global Classroom",
            clickElement: map.querySelector("#gglobalClassroom"),
            animateElement: map.querySelector("#globalClassroom")
        },
        {
            zone: 2,
            roomName: "CFCE 116",
            clickElement: map.querySelector("#gcfce116"),
            animateElement: map.querySelector("#cfce116")
        },
        {
            zone: 3,
            roomName: "CFCE 117",
            clickElement: map.querySelector("#gcfce117"),
            animateElement: map.querySelector("#cfce117")
        },
        {
            zone: 4,
            roomName: "CFCE 118",
            clickElement: map.querySelector("#gcfce118"),
            animateElement: map.querySelector("#cfce118")
        },
        {
            zone: 5,
            roomName: "CFCE 119",
            clickElement: map.querySelector("#gcfce119"),
            animateElement: map.querySelector("#cfce119")
        },
        {
            zone: 6,
            roomName: "CFCE 123",
            clickElement: map.querySelector("#gcfce123"),
            animateElement: map.querySelector("#cfce123")
        },
        {
            zone: 7,
            roomName: "CFCE 123B",
            clickElement: map.querySelector("#gcfce123B"),
            animateElement: map.querySelector("#cfce123B")
        },
        {
            zone: 8,
            roomName: "Atrium",
            clickElement: map.querySelector("#gmrc"),
            animateElement: map.querySelector("#mrc polygon")
        },
        {
            zone: 9,
            roomName: "CFCE/SSB Link",
            clickElement: map.querySelector("#gssbLink"),
            animateElement: map.querySelector("#ssbLink")
        },
        {
            zone: 10,
            roomName: "SSB 116A/B",
            clickElement: map.querySelector("#gssb116"),
            animateElement: map.querySelector("#ssb116")
        }
    ];

    //function for room click results
    function roomClick(eventCard) {
        closeMap();
        //get meta data for viewport
        viewport = document.querySelector("#viewport");
        original = viewport.attributes.content.value;
        force_scale = original + ", maximum-scale=1";
        viewport.setAttribute("content", force_scale);
        //reset to allow for user zoom
        setTimeout(function () {
            viewport.setAttribute("content", original);
        }, 100);
        //scroll relevant card into view
        eventCard.scrollIntoView();
        //highlight it briefly
        gsap.from(eventCard, {
            duration: 3,
            backgroundColor: "orange",
        })
    }

    // adding click event to all active rooms
    activeRooms.forEach(activeRoom => {
        activeRoom.clickElement.addEventListener("click", function (event) {
            let t1 = gsap.timeline();
            t1.to(activeRoom.animateElement, {
                fill: "orange",
                ease: "Power2.easeInOut",
                duration: 0.5,
                onComplete: roomClick(document.querySelector(`#zone${activeRoom.zone}`)),
            });
            t1.to(activeRoom.animateElement, {
                delay: 2,
                fill: "7fbdad",
                ease: "Power2.easeInOut",
                duration: 0.5
            });
        });
    });

    function cardInteraction(){
        let cards = Array.from(document.querySelectorAll(".event-box"));
        
        function cardClick(mapId){
            openMap();
            gsap.from(mapId, {
                duration: 10,
                fill: "orange",
            })
        }
    
        cards.forEach(card => {
            card.addEventListener("click", function(){cardClick(map.querySelector(`${card.dataset.mapid}`))});
        })
    }

    setTimeout(cardInteraction, 1000);
}