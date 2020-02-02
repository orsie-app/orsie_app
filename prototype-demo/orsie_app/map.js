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
    globalClass.addEventListener("click", roomClicked)
    cfce116.addEventListener("click", roomClicked)
    cfce117.addEventListener("click", roomClicked);
    cfce118.addEventListener("click", roomClicked);
    cfce119.addEventListener("click", roomClicked);
    cfce123.addEventListener("click", roomClicked);
    cfceLink.addEventListener("click", roomClicked);
    ssb116.addEventListener("click", roomClicked);

    cfce123b.addEventListener("click", roomClicked);
    atrium.addEventListener("click", roomClicked);

    // animate fill on click
    function roomClicked(){
        gsap.to(this, 0.5, {
            // temporary colour
            fill: "green",
            ease: Power2.easeInOut,
        });
        setTimeout(() => {
            gsap.to(this, 0.5, {
                fill: "3a556d",
                ease: Power2.easeInOut,
            });
        }, 5000);

        console.log(`room clicked`);
    }


    // can add a clear timeout here if needed
    // map.addEventListener("click", function(){
    //     console.log("clicked map");
    // })

}