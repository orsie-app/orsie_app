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
    let cefe116 = map.querySelector("#cefeRm116");
    let cefe117 = map.querySelector("#cefeRm117");
    let cefe118 = map.querySelector("#cefeRm118");
    let cefe119 = map.querySelector("#cefeRm119");
    let cefe123 = map.querySelector("#cefeRm123");
    let cefeLink = map.querySelector("#cefeLink");
    let ssb116 = map.querySelector("#ssbRm116");

    // elements to be added with updated map
    // let cefe123b = map.querySelector("#cefeRm123b");
    // let atrium = map.querySelector("#atrium");



    // click events for map elements
    globalClass.addEventListener("click", roomClicked)
    cefe116.addEventListener("click", roomClicked)
    cefe117.addEventListener("click", roomClicked);
    cefe118.addEventListener("click", roomClicked);
    cefe119.addEventListener("click", roomClicked);
    cefe123.addEventListener("click", roomClicked);
    cefeLink.addEventListener("click", roomClicked);
    ssb116.addEventListener("click", roomClicked);

    // cefe123b.addEventListener("click", roomClicked);
    // atrium.addEventListener("click", roomClicked);

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
    map.addEventListener("click", function(){
        console.log("clicked map");
    })

}