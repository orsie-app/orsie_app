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
    globalClass.addEventListener("click", roomClicked2)
    cfce116.addEventListener("click", roomClicked2)
    cfce117.addEventListener("click", roomClicked2);
    cfce118.addEventListener("click", roomClicked2);
    cfce119.addEventListener("click", roomClicked2);
    cfce123.addEventListener("click", roomClicked2);
    cfceLink.addEventListener("click", roomClicked2);
    ssb116.addEventListener("click", roomClicked2);

    cfce123b.addEventListener("click", roomClicked2);
    atrium.addEventListener("click", roomClicked2);

    /* old animation
    // animate fill on click
    function roomClicked(){
        gsap.to(this, 0.5, {
            fill: "blue",
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
    */

    function roomClicked2(){
        let t1 = gsap.timeline({repeat:1, repeatDelay:1});
        t1.to(this, 
            {fill: "green",
            ease: "Power2.easeInOut",
            duration: 1.5
        });
        t1.to(this, 
            { delay: 5,
            fill: "3a556d",
            ease: "Power2.easeInOut",
            duration: 0.5
        });
        console.log("room clicked");

        // function restartTimeline(){
        //     t1.restart(true, false);
        //     console.log("roomClicked2 restarted")
        // }

        // map.addEventListener("click", restartTimeline)
    }


    // if any of the rooms with class active get clicked, clears timeline

}